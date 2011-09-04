describe('Dateinput', function() {
  var $input,
  dateinput,
  conf;

  beforeEach(function() {
    setFixtures('<input type="date">');
    $input = $(':date');
  });

  afterEach(function() {
    dateinput.destroy();
  });

  describe('jQuery().fn.dateinput', function() {
    it('initializes with given configuration', function() {
      dateinput = $input.dateinput({something: false}).data('dateinput');
      expect(dateinput.getConf().something).toEqual(false);
    });

    it('does not re-initialize an existing dateinput', function() {
      dateinput = $input.dateinput({something: true}).data('dateinput');
      $input.dateinput({something: false});
      expect(dateinput.getConf().something).not.toEqual(false);
    });

    it('sets configured css prefix', function() {
      dateinput = $input.dateinput({css: { prefix: 'wowza' }}).data('dateinput');
      conf = dateinput.getConf();
      expect(conf.css.root).toEqual('wowzaroot');
    });

    it('sets empty css prefix when configured with null', function() {
      dateinput = $input.dateinput({css: { prefix: null }}).data('dateinput');
      conf = dateinput.getConf();
      expect(conf.css.root).toEqual('root');
    });
  });

  describe('Dateinput()', function() {
    beforeEach(function() {
      dateinput = $input.dateinput().data('dateinput');
    });

    describe('input attributes support', function() {
      beforeEach(function() {
        loadFixtures('special-attributes.html');
      });

      it('transforms HTML5 date type input', function() {
        $transformed_input = dateinput.getInput();
        expect($transformed_input).toHaveAttr('type', 'text');
        expect($transformed_input.data('orig-type')).toEqual('date');
      });

      describe('with disabled', function() {
        beforeEach(function() {
          dateinput = $(':date:disabled').dateinput().data('dateinput');
          $input = dateinput.getInput();
        });

        it('preserves disabled state', function() {
          expect($input).toBeDisabled();
        });

        it('does not show date selector', function() {
          $input.focus();
          expect(dateinput.getCalendar()).not.toBeVisible();
        });
      });

      describe('with readonly', function() {
        beforeEach(function() {
          dateinput = $(':date[readonly]').dateinput().data('dateinput');
          $input = dateinput.getInput();
        });

        it('preserves readonly state', function() {
          expect($input).toHaveAttr('readonly');
        });

        // TODO: this spec describes the *documented* functionality, but the
        // implementation is different. Filed issue:
        // https://github.com/jquerytools/jquerytools/issues/480
        it('shows date selector [known issue #480]', function() {
          $input.focus();
          expect(dateinput.getCalendar()).toBeVisible();
        });

        xit('does not allow date selection');
      });

      it('sets min config value from attr', function() {
        setFixtures('<input type="date" min="2004-02-20" />');
        dateinput = $(':date[min]').dateinput().data('dateinput');
        expect(dateinput.getMin()).toEqual(new Date(2004, 1, 20));
      });

      it('sets max config value from attr', function() {
        setFixtures('<input type="date" max="2020-02-20" />');
        dateinput = $(':date[max]').dateinput().data('dateinput');
        expect(dateinput.getMax()).toEqual(new Date(2020, 1, 20));
      });

      it('value attr sets input and dateinput value', function() {
        $input = $(':date[value]');
        dateinput = $input.dateinput().data('dateinput');
        expect(dateinput.getValue()).toEqual(new Date(2005, 2, 20));
        expect($input).toHaveValue('2005-03-20');
      });

      it('data-value attr sets dateinput value and not input value', function() {
        $input = $(':date[data-value]');
        dateinput = $input.dateinput().data('dateinput');
        expect(dateinput.getValue()).toEqual(new Date(2004, 2, 20));
        expect($input).toHaveValue('');
      });
    });

    describe('#show', function() {
      it('displays the date window', function() {
        dateinput.getInput().focus();
        expect(dateinput.getCalendar()).toBeVisible();
      });

      it('positions the date window properly', function() {
        dateinput = $input.dateinput({offset: [35, 22]}).data('dateinput');

        var left = $input.offset().left,
            top = $input.offset().top + $input.outerHeight({margins:true});

        expect(dateinput.getCalendar()).toBePositionedAt(left, top);
      });
    });
  });

});

