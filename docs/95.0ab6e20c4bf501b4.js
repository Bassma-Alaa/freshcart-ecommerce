"use strict";(self.webpackChunkEcommerce=self.webpackChunkEcommerce||[]).push([[95],{95:(Dn,fe,d)=>{d.d(fe,{Fj:()=>F,NI:()=>X,u:()=>rt,cw:()=>B,sg:()=>T,u5:()=>Cn,JJ:()=>xt,JL:()=>It,On:()=>K,UX:()=>Vn,kI:()=>we,_Y:()=>zt});var i=d(4769),lt=d(6814),pe=d(7715),ge=d(5592),me=d(7453),_e=d(4829),ye=d(9940),ve=d(8251),Ce=d(7400),Ve=d(2714),De=d(7398);let ut=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(i.Qsj),i.Y36(i.SBq))};static#e=this.\u0275dir=i.lG2({type:e})}return e})(),m=(()=>{class e extends ut{static#t=this.\u0275fac=function(){let t;return function(o){return(t||(t=i.n5z(e)))(o||e)}}();static#e=this.\u0275dir=i.lG2({type:e,features:[i.qOj]})}return e})();const h=new i.OlP("NgValueAccessor"),Me={provide:h,useExisting:(0,i.Gpc)(()=>F),multi:!0},Fe=new i.OlP("CompositionEventMode");let F=(()=>{class e extends ut{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ee(){const e=(0,lt.q)()?(0,lt.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(Fe,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){1&r&&i.NdJ("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[i._Bn([Me]),i.qOj]})}return e})();function f(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function dt(e){return null!=e&&"number"==typeof e.length}const l=new i.OlP("NgValidators"),p=new i.OlP("NgAsyncValidators"),Oe=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class we{static min(n){return function ht(e){return n=>{if(f(n.value)||f(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}(n)}static max(n){return function ft(e){return n=>{if(f(n.value)||f(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}(n)}static required(n){return function pt(e){return f(e.value)?{required:!0}:null}(n)}static requiredTrue(n){return function gt(e){return!0===e.value?null:{required:!0}}(n)}static email(n){return function mt(e){return f(e.value)||Oe.test(e.value)?null:{email:!0}}(n)}static minLength(n){return function _t(e){return n=>f(n.value)||!dt(n.value)?null:n.value.length<e?{minlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static maxLength(n){return function yt(e){return n=>dt(n.value)&&n.value.length>e?{maxlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static pattern(n){return function vt(e){if(!e)return O;let n,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),r=>{if(f(r.value))return null;const o=r.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}(n)}static nullValidator(n){return null}static compose(n){return Mt(n)}static composeAsync(n){return Et(n)}}function O(e){return null}function Ct(e){return null!=e}function Vt(e){return(0,i.QGY)(e)?(0,pe.D)(e):e}function At(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function Dt(e,n){return n.map(t=>t(e))}function bt(e){return e.map(n=>function Se(e){return!e.validate}(n)?n:t=>n.validate(t))}function Mt(e){if(!e)return null;const n=e.filter(Ct);return 0==n.length?null:function(t){return At(Dt(t,n))}}function U(e){return null!=e?Mt(bt(e)):null}function Et(e){if(!e)return null;const n=e.filter(Ct);return 0==n.length?null:function(t){return function Ae(...e){const n=(0,ye.jO)(e),{args:t,keys:r}=(0,me.D)(e),o=new ge.y(s=>{const{length:a}=t;if(!a)return void s.complete();const c=new Array(a);let v=a,V=a;for(let H=0;H<a;H++){let at=!1;(0,_e.Xf)(t[H]).subscribe((0,ve.x)(s,An=>{at||(at=!0,V--),c[H]=An},()=>v--,void 0,()=>{(!v||!at)&&(V||s.next(r?(0,Ve.n)(r,c):c),s.complete())}))}});return n?o.pipe((0,Ce.Z)(n)):o}(Dt(t,n).map(Vt)).pipe((0,De.U)(At))}}function j(e){return null!=e?Et(bt(e)):null}function Ft(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Ot(e){return e._rawValidators}function wt(e){return e._rawAsyncValidators}function R(e){return e?Array.isArray(e)?e:[e]:[]}function w(e,n){return Array.isArray(e)?e.includes(n):e===n}function St(e,n){const t=R(n);return R(e).forEach(o=>{w(t,o)||t.push(o)}),t}function Nt(e,n){return R(n).filter(t=>!w(e,t))}class Gt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=U(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=j(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class u extends Gt{get formDirective(){return null}get path(){return null}}class g extends Gt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Bt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let xt=(()=>{class e extends Bt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(g,2))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){2&r&&i.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[i.qOj]})}return e})(),It=(()=>{class e extends Bt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(u,10))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){2&r&&i.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[i.qOj]})}return e})();const A="VALID",N="INVALID",C="PENDING",D="DISABLED";function q(e){return(G(e)?e.validators:e)||null}function W(e,n){return(G(n)?n.asyncValidators:e)||null}function G(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class Ht{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===N}get pending(){return this.status==C}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(St(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(St(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Nt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Nt(n,this._rawAsyncValidators))}hasValidator(n){return w(this._rawValidators,n)}hasAsyncValidator(n){return w(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=C,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=A,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===C)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const t=Vt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,o)=>r&&r._find(o),this)}getError(n,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(N)?N:A}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){G(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function xe(e){return Array.isArray(e)?U(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Ie(e){return Array.isArray(e)?j(e):e||null}(this._rawAsyncValidators)}}class B extends Ht{constructor(n,t,r){super(q(t),W(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){(function Tt(e,n,t){e._forEachChild((r,o)=>{if(void 0===t[o])throw new i.vHH(1002,"")})})(this,0,n),Object.keys(n).forEach(r=>{(function Pt(e,n,t){const r=e.controls;if(!(n?Object.keys(r):r).length)throw new i.vHH(1e3,"");if(!r[t])throw new i.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(r=>{const o=this.controls[r];o&&o.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,o)=>{r.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,o)=>((r.enabled||this.disabled)&&(t[o]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((o,s)=>{r=t(r,o,s)}),r}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}const _=new i.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>b}),b="always";function x(e,n){return[...n.path,e]}function M(e,n,t=b){$(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function Te(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Ut(e,n)})}(e,n),function Ue(e,n){const t=(r,o)=>{n.valueAccessor.writeValue(r),o&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function He(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Ut(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function Pe(e,n){if(n.valueAccessor.setDisabledState){const t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function I(e,n,t=!0){const r=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(r),n.valueAccessor.registerOnTouched(r)),P(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function k(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function $(e,n){const t=Ot(e);null!==n.validator?e.setValidators(Ft(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const r=wt(e);null!==n.asyncValidator?e.setAsyncValidators(Ft(r,n.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();k(n._rawValidators,o),k(n._rawAsyncValidators,o)}function P(e,n){let t=!1;if(null!==e){if(null!==n.validator){const o=Ot(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.validator);s.length!==o.length&&(t=!0,e.setValidators(s))}}if(null!==n.asyncValidator){const o=wt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.asyncValidator);s.length!==o.length&&(t=!0,e.setAsyncValidators(s))}}}const r=()=>{};return k(n._rawValidators,r),k(n._rawAsyncValidators,r),t}function Ut(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function J(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}function Z(e,n){if(!n)return null;let t,r,o;return Array.isArray(n),n.forEach(s=>{s.constructor===F?t=s:function Le(e){return Object.getPrototypeOf(e.constructor)===m}(s)?r=s:o=s}),o||r||t||null}function Lt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function Yt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const X=class extends Ht{constructor(n=null,t,r){super(q(t),W(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Yt(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Lt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Lt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){Yt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},ze={provide:g,useExisting:(0,i.Gpc)(()=>K)},$t=(()=>Promise.resolve())();let K=(()=>{class e extends g{constructor(t,r,o,s,a,c){super(),this._changeDetectorRef=a,this.callSetDisabledState=c,this.control=new X,this._registered=!1,this.name="",this.update=new i.vpe,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Z(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),J(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){M(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){$t.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const r=t.isDisabled.currentValue,o=0!==r&&(0,i.VuI)(r);$t.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?x(t,this._parent):[t]}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(u,9),i.Y36(l,10),i.Y36(p,10),i.Y36(h,10),i.Y36(i.sBO,8),i.Y36(_,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i._Bn([ze]),i.qOj,i.TTD]})}return e})(),zt=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}return e})(),Zt=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({})}return e})();const tt=new i.OlP("NgModelWithFormControlWarning"),tn={provide:u,useExisting:(0,i.Gpc)(()=>T)};let T=(()=>{class e extends u{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new i.vpe,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(P(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return M(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){I(t.control||null,t,!1),function Ye(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,function Rt(e,n){e._syncPendingControls(),n.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,o=this.form.get(t.path);r!==o&&(I(r||null,t),(e=>e instanceof X)(o)&&(M(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);(function jt(e,n){$(e,n)})(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function je(e,n){return P(e,n)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){$(this.form,this),this._oldForm&&P(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(r){return new(r||e)(i.Y36(l,10),i.Y36(p,10),i.Y36(_,8))};static#e=this.\u0275dir=i.lG2({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){1&r&&i.NdJ("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[i._Bn([tn]),i.qOj,i.TTD]})}return e})();const rn={provide:g,useExisting:(0,i.Gpc)(()=>rt)};let rt=(()=>{class e extends g{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,r,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new i.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Z(0,s)}ngOnChanges(t){this._added||this._setUpControl(),J(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return x(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#e=this.\u0275fac=function(r){return new(r||e)(i.Y36(u,13),i.Y36(l,10),i.Y36(p,10),i.Y36(h,10),i.Y36(tt,8))};static#n=this.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[i._Bn([rn]),i.qOj,i.TTD]})}return e})(),he=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[Zt]})}return e})(),Cn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:_,useValue:t.callSetDisabledState??b}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[he]})}return e})(),Vn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:tt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:_,useValue:t.callSetDisabledState??b}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.oAB({type:e});static#n=this.\u0275inj=i.cJS({imports:[he]})}return e})()}}]);