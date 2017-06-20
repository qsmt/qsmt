/**
 * Created by UC206612 on 2016/11/15.
 *
 *
 * @author: Sheng Qing<qing.sheng@thomsonreuters.com>
 *
 */


(function() {
    'use strict';

    angular
        .module('qsmt')
        .component('solution', {
            template: require('./solution.component.html'),
            controller: SolutionController,
            bindings: {
                ngModel: '='
            }
        });

    SolutionController.$inject = [];

    function SolutionController() {

    }

})();
