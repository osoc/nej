var f = function(_e,_h){
    if (CMPT){
        var _  = NEJ.P,
            _h = _('nej.h'),
            _e = _('nej.e');
    }
	/**
     * 删除IFrame节点，保留历史
     * @param  {Node} iframe节点
     * @return {Void}
     */
	_h.__removeIFrameKeepHistory = function(_iframe){
        _e._$remove(_iframe);
    };

    return _h;
};
define(['{lib}base/element.js'],f);