function dashboard() {
  document.querySelector(".total").innerHTML = `<div class="hero-section">
         <h2>DASHBOARD</h2>
         <div class="box-content-flex">
           <div class="box-content">
             <h6>Parent</h6>
             <p>Credit Reference
               <span class="right">1000.00</span>
             </p>
             <p>Master Balance
               <span class="right">1000.00</span>
             </p>
             <p>Settlement
               <span class="right">0.00</span>
             </p>
           </div>
     
           <div class="box-content">
             <h6>Own</h6>
             <p>Credit Reference
               <span class="right">1000.00</span>
             </p>
             <p>Profit Loss
               <span class="right">0.00</span>
             </p>
             <p>PL with Balance
               <span class="right">1000.00</span>
             </p>
           </div>
     
           <div class="box-content">
             <h6>Child</h6>
             <p>Credit Reference
               <span class="right">1000.00</span>
             </p>
             <p>Balance
               <span class="right">0.00</span>
             </p>
             <p>Settlement
               <span class="right">1000.00</span>
             </p>
           </div>
         </div>
       </div>
       <!-- DATA BOXES  -->
       <div class="data-boxes">
         <div class="data-content">
           <i class="ri-stack-line"></i>
           <p class="data-right"><a href="">0</a><br>
             <span class="data-right2">Logged in</span>
           </p>
         </div>
     
         <div class="data-content">
           <i class="ri-camera-lens-line"></i>
           <p class="data-right"><a href="">Click Here</a><br>
             <span class="data-right2">Week PL</span>
           </p>
         </div>
     
         <div class="data-content">
           <i class="ri-money-dollar-box-line"></i>
           <p class="data-right"><a href="">0</a><br>
             <span class="data-right2">Active Clients</span>
           </p>
         </div>
     
         <div class="data-content">
           <i class="ri-money-dollar-box-line"></i>
           <p class="data-right"><a href="">Click Here</a><br>
             <span class="data-right2">Week Commission</span>
           </p>
         </div>
       </div>`;
  document.querySelector(".nav2-content").style.display = "none";
  pp -= 1;
}

function userlist() {
  document.querySelector(
    ".total"
  ).innerHTML = `<div class="content-page" style="background-size: 0px;
     
         margin-left:0;margin-top:0;">
         <div class="content">
             <!-- Start Content-->
             <div class="container-fluid">
                 <div class="Loading" style="display: none;">
                     <button class="btn" type="button" disabled="">
                         <span class="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                         Loading...
                     </button>
                 </div>
                 <div class="page-loading" style="display:none">
                     <!--<div class="card">
                         <div class="card-body text-center">
                             <div class="spinner-grow text-primary m-2" role="status"></div>
                             <div class="spinner-grow text-secondary m-2" role="status"></div>
                             <div class="spinner-grow text-success m-2" role="status"></div>
                             <div class="spinner-grow text-danger m-2" role="status"></div>
                             <div class="spinner-grow text-warning m-2" role="status"></div>
                             <div class="spinner-grow text-info m-2" role="status"></div>
                             <div class="spinner-grow text-dark m-2" role="status"></div>
                             <div class="spinner-grow text-blue m-2" role="status"></div>
                             <div class="spinner-grow text-pink m-2" role="status"></div>
                         </div>-->
                     <!--end card-body-->
                     <!--</div>--><!--end card-->
                 </div>
                 <div class="divNews pt-1 d-lg-none d-sm-block">
                     <marquee behavior="scroll" direction="left" id="news" onmouseover="this.stop();" onmouseout="this.start();" class="vertical-align-middle">
                         <div id="NewsDisplayBody"><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Jo bhi client 5-10 sec me Lay/Back karega uski bets delete ki jaayegi aur valid nhi maani jaayegi. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Our Centre Server facing malware attack So for now all system down. We setup new server once it will complete we inform you. It will setup in minimum 4 hours. Sorry for Inconvenience. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Dear Clients, Due to server issue site bnd hone ki vjah se all client ki bets cancel ki gyi he chahe woh loss me tha chahe woh profit me tha so please support with us. Sorry for Inconvenience.  &nbsp;&nbsp;&nbsp;&nbsp;         </div></div>
                     </marquee>
                 </div>
                 <!-- start page title -->
                 
     <div id="pageData">
     
     <script>
     $(document).ready(function () {
     /**/
     document.title = 'User List';
     /**/
     });
     </script>
     
     <style>
     .pswrequired {
     font-size: 0.75rem;
     color: #f1556c;
     }
     
     .SettlmentPopup {
     min-width: 95px;
     }
     
     tfoot {
     display: table-header-group;
     }
     </style>
     <div class="row">
     <div class="col-12">
     <div class="page-title-box">
         <div class="page-title-right">
             <ol class="breadcrumb m-0" id="UserSitemap">
             </ol>
         </div>
         <h4 class="page-title">User List</h4>
     </div>
     </div>
     </div>
     <!-- end page title -->
     
     <div class="row">
     <div class="col-12">
     <div class="card">
         <div class="row">
             <div class="col-sm-12 col-xs-12">
                 <div class="row">
                     <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12 manageDLPermissionAction">
                             <select class="form-control" id="ActionBox">
                                 <option value="">Select Action</option>
                                 <option value="isApproved" key="Approval">Active</option>
                                 <option value="isBetAllow" key="BetAllow">Bet Allow</option>
                             </select>
                     </div>
                     <div class="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                             <button onclick="AllowAction(true)" class="btn btn-warning waves-effect waves-light manageDLPermissionAction">Allow</button>
                             <button onclick="AllowAction(false)" class="btn btn-danger waves-effect waves-light manageDLPermissionAction">Block</button>
                             <button onclick="AddClient()" class="btn btn-success waves-effect waves-light manageDLUserAction"> Add Client</button>
                             <button onclick="AddAgent()" class="btn btn-success waves-effect waves-light manageDLUserAction"> Add Agent</button>
                             <button onclick="ResetUserAction()" class="btn btn-primary waves-effect waves-light">Reset</button>
     
                         <div class="d-inline-flex">
                             <span id="PointDetail" class="font-weight-bold Text-15">
                                 <label class="switch1 vertical-align-middle">
                                     <input type="checkbox" class="px" id="chkisActiveUsers" name="rbtn" checked="" onchange="ActiveDeActive();">
                                     <div class="slider1 round1">
                                         <span class="on">Active</span>
                                         <span class="off">In‑Active</span>
                                     </div>
                                 </label>
                             </span>
                         </div>
     
                         <div class="d-inline-flex">
                             <span id="PointDetail" class="font-weight-bold Text-15">
                                 <label class="switchPts hide vertical-align-middle" style="display: none;">
                                     <input type="checkbox" class="px" id="rbtnPTSINR" name="rbtn" onchange="PTSINR();">
                                     <div class="sliderPts roundPts">
                                         <span class="onRound">PTS</span>
                                         <span class="offRound">INR</span>
                                     </div>
                                 </label>
                             </span>
                         </div>
                     </div>
                 </div>
             </div><!-- end col-->
         </div>
     </div>
     
     <div class="card">
         <div class="card-body">
             <div class="row">
                 <div class="col-12">
                     <div class="row">
                         <div class="col-12">
                             <ol class="breadcrumb m-0" id="UserBreadCrumb"><li class="breadcrumb-item"><a onclick="LoadUserListFromBreadcrumb('5A5649762B324D574F6C493D','1','Shiv4400','0')"><i class="fa fa-home"></i></a></li><li class="breadcrumb-item">         <a id="btnUserName-5A5649762B324D574F6C493D" class="cursor-pointer" data-toggle="tooltip" title="Shiv4400" onclick="LoadUserListFromBreadcrumb('5A5649762B324D574F6C493D','1','Shiv4400', '0')">             Shiv4400                          <i class="mdi mdi-autorenew" aria-hidden="true"></i>                      </a>     </li></ol>
                         </div>
                     </div>
                 </div>
                 <hr class="mt-1 mb-1 width-100">
                 
                 <div class="col-12">
                     <div class="row d-flex flex-row-reverse">
                         <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  mb-1">
                             <input type="text" id="txtsearch" class="form-control" placeholder="Search Min. 2 characters">
                         </div>
                         <div class="dt-buttons flex-wrap ol-lg-3 col-md-3 col-sm-12 col-xs-12 text-right">
                             <a class="btn btn-secondary buttons-html5 btn-light mr-1" tabindex="0" onclick="ExportTableData('CSV')" title="CSV" style="display: inline-block;"><span><i class=" fas fa-file-csv"></i></span></a>
                             <a class="btn btn-secondary buttons-html5 btn-light mr-1" tabindex="0" aria-controls="tbluserlist" onclick="ExportTableData('Excel')" title="Excel" style="display: inline-block;"><span><i class="far fa-file-excel"></i></span></a>
                             <a class="btn btn-secondary buttons-html5 btn-light mr-1" tabindex="0" aria-controls="tbluserlist" onclick="ExportTableData('PDF')" title="PDF" style="display: inline-block;"><span><i class="far fa-file-pdf"></i></span></a>
                         </div>
                         <div class="col-md-7 col-sm-12">
                             <div class="col-12 mt-2 font-weight-600">Showing&nbsp;<span id="lblselctedrecords">1</span>&nbsp;of&nbsp;<span id="lbltotalrecords">1</span>&nbsp;entries</div>
                         </div>
                     </div>
                 </div>
                 <div>
                 <iframe src="https://parkinplay.in/template-agent/index.php"  ></iframe>
                 <style>
                
                 iframe{
                    width:85.5vw;
                    height:35vh;
                   
                 }
                 
                 </style> 
                 </div>

                 <div id="divLoadMore" class="load-more">
                 <button class="loadmorebtn"><a href="https://parkinplay.in/template-agent/index.php" style="color:white; font-family: Georgia, 'Times New Roman', Times, serif;font-weight:600;">View Expanded Client list</a></button>
                 </div>
                 <style>
                 .load-more{
                     display:flex;
                     justify-content:center;
                     margin-top:4vh;
                     background-color:transparent;
                 }
                 .loadmorebtn{
                     display:flex;
                     justify-content:center;
                     align-items:center;
                     padding:5px;
                     background-color:#38761D;
                     border-radius:30px;
                     width:fit-content;
                     height:3rem;
                     box-sizing:border-box;
                     scale:0.8;
                
                 
                 </style>
                 
             </div>
         </div>
     </div>
     </div>
     </div>
     
     <div id="maxchild-popup" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
     <div class="modal-dialog">
     <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="modal-title">
                 <span><label>Max Child Level : </label><span class="text-bold" id="UserName_MaxChildLevelPopup"></span></span>
             </h4>
             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
         </div>
         <div class="modal-body">
             <form action="#" id="MaxChildForm">
                 <div class="row">
                     <div class="form-group col-sm-6 col-xs-12">
                         <label for="txtMinRate">Max Child No</label>
                         <div class="input-group">
                             <select id="Dropdown_MaxChild" class="form-control directorySelect"></select>
                             <input type="hidden" id="hdnMaxChildPopup_UserID">
                             <input type="hidden" id="hdnMaxChildPopup_UserType">
                         </div>
                     </div>
                 </div>
                 <div class="row" style="float:right;">
                     <div class="form-inline">
                         <button class="btn btn-primary" type="submit">Save</button>
                     </div>
                 </div>
             </form>
         </div><form
     </div><!-- /.modal-content -->
     </div><!-- /.modal-dialog -->
     </div><!-- /.modal -->
     <div id="password-popup" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
     <div class="modal-dialog">
     <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="modal-title">
                 <label>Confirm</label>
             </h4>
             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
         </div>
         <div class="modal-body">
             <form action="#" id="PasswordForm">
                 <div class="form-group">
                     <input type="hidden" id="isAllow" value="">
                     <label for="txtPassword">Password<span class="text-danger">*</span>:</label>
                     <div class="input-group input-group-merge">
                         <input type="password" id="txtPassword" class="form-control" placeholder="Enter Password">
                         <div class="input-group-append" data-password="false" onclick="HideShowPassword()">
                             <div class="input-group-text">
                                 <span class="password-eye"></span>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="form-group text-center">
                     <button class="btn btn-primary" type="submit">Submit</button>
                 </div>
             </form>
         </div>
     </div><!-- /.modal-content -->
     </div><!-- /.modal-dialog -->
     </div>
     <div id="singlepassword-popup" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
     <div class="modal-dialog">
     <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="modal-title">
                 <label>Confirm Password</label>
             </h4>
             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
         </div>
         <div class="modal-body">
             <form action="#" id="SinglePasswordForm">
                 <div class="form-group">
                     <div class="row">
                         <div class="col-lg-5 col-md-3 col-sm-12 col-xs-12">
                             <input type="hidden" id="isAllowPassword" value="">
                             <div class="input-group input-group-merge">
                                 <input type="password" id="txtpwd" class="form-control" placeholder="Enter Password">
                                 <div class="input-group-append" data-password="false" onclick="HideShowPassword()">
                                     <div class="input-group-text">
                                         <span class="password-eye"></span>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-lg-7 col-md-3 col-sm-12 col-xs-12">
                             <button class="btn btn-success btnsaveall hide" type="submit" value="Saveall">Save All</button>
                             <button class="btn btn-success" type="submit" value="Save">Save</button>
                             <button class="btn btn-danger" data-dismiss="modal">Cancel</button>
                         </div>
     
                         <div class="row float-right btnsaveall hide">
                             <span class="text-danger mt-1 btnsaveall hide">Note: <i>Click on "Save All" will save permission to all downline's user</i></span>
                         </div>
     
                     </div>
     
                 </div>
             </form>
         </div>
     </div><!-- /.modal-content -->
     </div><!-- /.modal-dialog -->
     </div>
     <div id="ChipSettlment-popup" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
     <div class="modal-dialog">
     <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="modal-title">
                 <span class="text-bold" id="ChipsummaryUname"></span>
             </h4>
             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
         </div>
         <div class="modal-body">
             <form action="#" id="ChipsSettlmentForm">
                 <div class="row">
                     <input id="hdnUserID" type="hidden">
                     <input id="hdnRefID" type="hidden">
                     <input id="hdnRefType" type="hidden">
                     <input id="hdnIsReverse" type="hidden">
                     <table class="datatable table dt-responsive nowrap">
                         <tbody>
                             <tr>
                                 <td><label class="col-form-label">Profit/Loss :</label></td>
                                 <td><input id="txtCurrentBalance" class="form-control" disabled=""></td>
                             </tr>
                             <tr>
                                 <td>
                                     <label class="col-form-label">Cash :</label>
                                 </td>
                                 <td>
                                     <div class="input-group">
                                         <input type="text" id="txtAmount" autocomplete="off" onkeypress="return allowDecimal(this,event)" onkeyup="AmountChange(this,event)" ename="Settlment Amount" class="AllowDecimal form-control" required="">
                                         <span class="input-group-text hidden-sm">PTS</span>
                                     </div>
                                 </td>
                             </tr>
                             <tr>
                                 <td></td>
                                 <td>
                                     <a class="cursor-pointer clsGetFullAmount badge-soft-success" onclick="getFullAmount()">Full Amount</a>
                                     <a class="cursor-pointer clsClearFullAmount badge badge-soft-danger" onclick="clearFullAmount()">Clear</a>
                                 </td>
                             </tr>
     
                             <tr>
                                 <td><label class="col-form-label">Remain Cash :</label></td>
                                 <td><span id="lblNewBalance"></span></td>
                             </tr>
                             <tr>
                                 <td><label class="col-form-label">Remarks :</label></td>
                                 <td><textarea class="form-control textarea" cols="20" id="txtRemarkUserListSetellement" name="txtRemarkUserListSetellement" rows="2"></textarea></td>
                             </tr>
                             <tr>
                                 <td><label class="col-form-label">Password :</label></td>
                                 <td>
                                     <div class="input-group input-group-merge">
                                         <input class="form-control" name="txtSettlementPassword" id="txtSettlementPassword" placeholder="Password" type="password">
                                         <div class="input-group-append" data-password="false" onclick="HideShowPassword()">
                                             <div class="input-group-text">
                                                 <span class="password-eye"></span>
                                             </div>
                                         </div>
                                     </div>
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
                 <div class="row" style="float:right;">
                     <div class="form-inline">
                         <button id="btnSettlement" class="btn btn-primary" type="submit">Cash Settlement</button>
                     </div>
                 </div>
             </form>
         </div>
     </div><!-- /.modal-content -->
     </div><!-- /.modal-dialog -->
     </div>
     <div id="UserProfileModal-Popup" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
     <div class="modal-dialog modal-xl modal-dialog-scrollable">
     <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="modal-title">
                 <label id="userProfileDetails-apptitle"></label>
             </h4>
             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
         </div>
         <div class="modal-body">
             <input type="hidden" id="hdn-upUserId" value="">
             <input type="hidden" id="hdn-upUserType" value="">
             <input type="hidden" id="hdn-upUserLoginType" value="">
             <div id="divUserProfileDetails"></div>
         </div>
     </div><!-- /.modal-content -->
     </div><!-- /.modal-dialog -->
     </div>
     
     <script>
     var ClientUserType = "3";
     var AgentUserType = "2";
     var AdminUserType = "1";
     
     var UserId = getLocalStorage(lsStrUserSessionId);
     var UserName = getLocalStorage(lsUserName);
     var CurrentUser = UserId;
     var currenrUserName = UserName;
     var currenrUserFullName = "";
     var vCurrentUserType = '1';
     
     var vCUserName = "";
     var vCstrUserName = "";
     var vMarketTypeArr = '727A6B43615364784D50413D,656A6973414C6B4C5551633D,4D4E3764617254514747493D,74436251495938684D59513D,6E6663526A596E625754633D,7473545A6F6643505053673D,58434B6F393251624551383D';
     var DefaultValMarketType = '472F396756704A635447733D';
     var vAdminEnum = '1';
     var vMarketEnum = '727A6B43615364784D50413D';
     var vSessionEnum = '656A6973414C6B4C5551633D';
     var vBookmakersEnum = '4D4E3764617254514747493D';
     var vLineMarketEnum = '74436251495938684D59513D';
     var vManualOddsEnum = '6E6663526A596E625754633D';
     var vSportBookEnum = '7473545A6F6643505053673D';
     var vMaxDBLimit = 9999;
     var lstChildLevel = '[{&quot;Key&quot;:&quot;SubAgent&quot;,&quot;Value&quot;:1},{&quot;Key&quot;:&quot;Agent&quot;,&quot;Value&quot;:2},{&quot;Key&quot;:&quot;SubMaster&quot;,&quot;Value&quot;:3},{&quot;Key&quot;:&quot;Master&quot;,&quot;Value&quot;:4},{&quot;Key&quot;:&quot;SuperMaster&quot;,&quot;Value&quot;:5},{&quot;Key&quot;:&quot;SubAdmin&quot;,&quot;Value&quot;:6},{&quot;Key&quot;:&quot;Admin&quot;,&quot;Value&quot;:7}]';
     var vEventTypeSport = '1';
     var vEventTypeTournament = '2';
     var vIsLimitUpdateFromUserList = true;
     
     var vDownlinePermission_NotAllow = 0;
     var vDownlinePermission_AllowOwnUser = 1;
     var vDownlinePermission_AllowAllDownlineUser = 2;
     </script>
     
     <script src="/js/UserList.min.js?v=0.0.0.195" asp-append-version="true"></script>
     
     <script type="text/x-jquery-tmpl" id="tmpltblUserListAdvanceHead">
     <table id="tbluserlist" class="datatable table dt-responsive nowrap w-100 table-hover">
     <thead>
         <tr id="InformationList">
             <th class="th1 nosort no-export">
                 <input type="checkbox" name="chkAllUser" id="chkAllUser" onclick="getallcheck(this, 'tbluserlist')" />
             </th>
             <th></th>
             <th onclick="sortDataTable('appUserName', this);" dataorder="asc" class="sorting min-width-200">UserName [FullName]</th>
             <th class="text-right nosort">Credit Ref.</th>
             <th class="text-right nosort">P/L (Pts)</th>
                 <th class="text-right nosort manageDLSettlementAction hide">Settlement(P|L)</th>
             <th class="text-right nosort clsClientPL">Client(P|L) %</th>
             <th onclick="sortDataTable('appRealLiabilityPts', this);" dataorder="asc" class="clsPts text-right sorting">Exposure</th>
             <th onclick="sortDataTable('appRealLiabilityRs', this);" dataorder="asc" class="clsRs hide text-right sorting">Exposure</th>
     
             <th onclick="sortDataTable('appBalance', this);" dataorder="asc" class="clsPts text-right sorting">Availabel Bal.</th>
             <th onclick="sortDataTable('appBalanceRs', this);" dataorder="asc" class="clsRs hide text-right sorting">Availabel Bal.</th>
                 <th class="text-center nosort manageDLDWAction no-export hide">D/W</th>
             <th class="text-right nosort">Share</th>
             <th class="text-right nosort">Point</th>
                 <th class="text-center nosort no-export min-width-80">Action</th>
     
                 <th class="text-center nosort width-60 manageDLUserAction hide no-export">Edit</th>
         </tr>
     </thead>
     <tfoot>
         <tr>
             <td class="no-export"></td>
             <td></td>
             <td></td>
             <td id="th_CreditReference" class="text-right">
                 <span class="th_CreditReferencePts clsCreditRefTotalPts clsPts"></span>
                 <span class="th_CreditReferenceRs clsCreditRefTotalRs clsRs"></span>
             </td>
             <td id="th_Balance" class="text-right">
                 <span class="th_BalancePts clsPtsTotalPts clsPts"></span>
                 <span class="th_BalanceRs clsPtsTotalRs clsRs"></span>
             </td>
                 <td id="th_SettlementPL" class="text-right">
                     <span class="th_SettlementPLPts clsSettlementPLTotalPts  clsPts"></span>
                     <span class="th_SettlementPLRs clsSettlementPLTotalRs clsRs"></span>
                 </td>
             <td id="th_ClientPLper" class="text-right clsClientPL">
                 <span class="th_ClientPLPtsper clsPts"></span>
                 <span class="th_ClientPLRsper clsRs"></span>
             </td>
             <td id="th_RealExposure" class="text-right">
                 <span class="th_RealExposurePts clsPts"></span>
                 <span class="th_RealExposureRs clsRs"></span>
             </td>
             <td id="th_Available_Balance" class="text-right">
                 <span class="th_Available_BalancePts clsAvailabelBalTotalPts clsPts"></span>
                 <span class="th_Available_BalanceRs clsAvailabelBalTotalRs clsRs"></span>
             </td>
                 <td class="no-export"></td>
             <td></td>
             <td></td>
             <td class="no-export"></td>
             <td class="no-export"></td>
     
         </tr>
     </tfoot>
     <tbody id="tblListBody">
     </tbody>
     </table>
     </script>
     <div id="UserResetPasswordPopup" class="UserResetPasswordPopup"></div>
     <div id="UserDepositWithdrawPopup" class="UserDepositWithdrawPopup"></div>
     <div id="UserPermissionPopup" class="UserPermissionPopup"></div>
     <div id="UserSharesPopup" class="UserSharesPopup"></div>
     <div id="UserCreditReferencePopup" class="UserCreditReferencePopup"></div>
     <div id="UserPermissionLogPopup" class="UserPermissionLogPopup"></div>
     
     <div id="UserLimitModal-Popup" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
     <div class="modal-dialog modal-xl modal-dialog-scrollable">
     <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="modal-title">
                 <label id="userlimit-apptitle"></label>
             </h4>
             <div class="row ml-2 col-md-6">
                 <div class="col-md-6 col-sm-6 col-xs-6 mb-1">
                     <div class="input-group">
                         <select id="ddlSport" class="form-control" ename="Sport"></select>
                     </div>
                 </div>
                 <div class="col-md-6 col-sm-6 col-xs-6">
                     <div class="input-group">
                         <select id="ddlTournament" class="form-control" ename="Tournament">
                             <option value="">Tournament Limit</option>
                         </select>
                     </div>
                 </div>
             </div>
             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
         </div>
         <div class="modal-body">
             <form action="#" id="UserLimitForm">
                     <div id="divUserLimitSetting_727A6B43615364784D50413D"></div>
                     <div id="divUserLimitSetting_656A6973414C6B4C5551633D"></div>
                     <div id="divUserLimitSetting_4D4E3764617254514747493D"></div>
                     <div id="divUserLimitSetting_74436251495938684D59513D"></div>
                     <div id="divUserLimitSetting_6E6663526A596E625754633D"></div>
                     <div id="divUserLimitSetting_7473545A6F6643505053673D"></div>
                     <div id="divUserLimitSetting_58434B6F393251624551383D"></div>
                 <div class="row">
                     <div class="col-md-4 mt-2">
                         <span class="red"><i>Note: Please set limit as user point wise.</i></span>
                     </div>
                     <div class="col-md-8 modal-footer">
                         <div class="form-inline">
                             <input type="hidden" name="strUserDetail" id="strUserDetail">
                             <select id="applyOn" class="form-control">
                                 <option value="">Select Apply Type</option>
                                 <option value="Save">Save</option>
                                 <option class="clsApplyType" value="SaveToAll">Save &amp; Save to all</option>
                                 <option class="clsApplyType" value="SaveToChild">Save &amp; Save to child</option>
                                 <option value="SaveToAllAgent">Save &amp; Save to all agent</option>
                                 <option class="clsApplyType" value="SaveToAllClient">Save &amp; Save to all client</option>
                                 <option value="SaveToChildAgent">Save &amp; Save to child agent</option>
                                 <option class="clsApplyType" value="SaveToChildClient">Save &amp; Save to child client</option>
                             </select>
                             <div class="input-group input-group-merge">
                                 <input class="form-control marginl15" type="password" id="txtUserLimitPassword" placeholder="Enter Password" style="margin-right: 10px;">
                                 <div class="input-group-append" data-password="false" onclick="HideShowPassword()">
                                     <div class="input-group-text">
                                         <span class="password-eye"></span>
                                     </div>
                                 </div>
                             </div>
                             <button class="btn btn-success" type="button" id="btnUpdateUserLimit">Save</button>
                         </div>
                     </div>
                 </div>
             </form>
         </div>
     </div><!-- /.modal-content -->
     </div><!-- /.modal-dialog -->
     </div><!-- /.modal -->
     
     <div id="UserProfileModal-Popup" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
     <div class="modal-dialog modal-xl modal-dialog-scrollable">
     <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="modal-title">
                 <label id="userProfileDetails-apptitle"></label>
             </h4>
             <button type="button" class="close" data-dismiss="modal" onclick="UserProfileModalClose()" aria-hidden="true">×</button>
         </div>
         <div class="modal-body">
             <input type="hidden" id="hdn-upUserId" value="">
             <input type="hidden" id="hdn-upUserType" value="">
             <input type="hidden" id="hdn-upUserLoginType" value="">
             <div id="divUserProfileDetails"></div>
         </div>
     </div><!-- /.modal-content -->
     </div><!-- /.modal-dialog -->
     </div>
     
     <script type="text/x-jquery-tmpl" id="tmplUserListAdvance">
     <tr>
     <td class="text-center no-export">
     
     
     </td>
     <td class="text-center">
         {{if appUserType==1 || appUserType==2 }}
         {{if appIsB2C==true}}
         <span class="btn btn-outline-danger grid-button" data-plugin="tippy" data-tippy-arrowType="round" data-tippy-arrow="true" data-tippy-animation="fade" title="B2C Agent">A</span>
         {{else}}
         <span class="btn btn-danger grid-button" data-plugin="tippy" data-tippy-arrowType="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Agent">A</span>
         {{/if}}
         {{/if}}
     
         {{if appUserType==3}}
         {{if appIsB2C==true}}
         <span class="btn btn-outline-warning grid-button" style="cursor:text;" data-plugin="tippy" data-tippy-arrowType="round" data-tippy-arrow="true" data-tippy-animation="fade" title="B2C Client">C</span>
         {{else}}
         <span class="btn btn-warning grid-button" style="cursor:text;" data-plugin="tippy" data-tippy-arrowType="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Client">C</span>
         {{/if}}
         {{/if}}
     </td>
     
     
      
     </li>
     </script>
     </div>
     
     <script>
     $(document).ready(function () {
     LoadView("UserList");
     });
     </script>
                 <!-- end page title -->
             </div> <!-- container -->
         </div> <!-- content -->
     
         </div>`;
  document.querySelector(".nav2-content").style.display = "none";
  pp -= 1;
}  
//ADDCLIENT FUNCTON
function AddClient() {
  document.querySelector(".total").innerHTML = `<div class="content-page" style="background-size: 0px; margin-top:0; margin-left:0;">
  <div class="content">
      <!-- Start Content-->
      <div class="container-fluid">
          <div class="Loading" style="display: none;">
              <button class="btn" type="button" disabled="">
                  <span class="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                  Loading...
              </button>
          </div>
          <div class="page-loading" style="display:none">
              <!--<div class="card">
                  <div class="card-body text-center">
                      <div class="spinner-grow text-primary m-2" role="status"></div>
                      <div class="spinner-grow text-secondary m-2" role="status"></div>
                      <div class="spinner-grow text-success m-2" role="status"></div>
                      <div class="spinner-grow text-danger m-2" role="status"></div>
                      <div class="spinner-grow text-warning m-2" role="status"></div>
                      <div class="spinner-grow text-info m-2" role="status"></div>
                      <div class="spinner-grow text-dark m-2" role="status"></div>
                      <div class="spinner-grow text-blue m-2" role="status"></div>
                      <div class="spinner-grow text-pink m-2" role="status"></div>
                  </div>-->
              <!--end card-body-->
              <!--</div>--><!--end card-->
          </div>
          <div class="divNews pt-1 d-lg-none d-sm-block">
              <marquee behavior="scroll" direction="left" id="news" onmouseover="this.stop();" onmouseout="this.start();" class="vertical-align-middle">
                  <div id="NewsDisplayBody"><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Jo bhi client 5-10 sec me Lay/Back karega uski bets delete ki jaayegi aur valid nhi maani jaayegi. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Our Centre Server facing malware attack So for now all system down. We setup new server once it will complete we inform you. It will setup in minimum 4 hours. Sorry for Inconvenience. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Dear Clients, Due to server issue site bnd hone ki vjah se all client ki bets cancel ki gyi he chahe woh loss me tha chahe woh profit me tha so please support with us. Sorry for Inconvenience.  &nbsp;&nbsp;&nbsp;&nbsp;         </div></div>
              </marquee>
          </div>
          <!-- start page title -->
          
<div id="pageData"><style>
.col-md-8 {
min-height: 15px !important;
}
</style>
<script>
var vParentName = '';
var vParentId = '';
var AdminEnum = '1';
var ClientEnum = '3';
var vClientId = '';
var SaveEdit = 'SaveEdit';
var SaveClose = 'SaveClose';
var SaveAddNew = 'SaveAddNew';

</script>


<script>
$(document).ready(function () {
document.title='Add Client';
});
</script>


<div id="UserTreeModalDiv"></div>

<script src="/js/clientdetails.min.js?v=0.0.0.195" asp-append-version="true"></script>

<div class="row">
<div class="col-12">
<div class="page-title-box">
  <div class="page-title-right">
  </div>
  <h4 class="page-title">Add / Edit Client</h4>
</div>
</div>
</div>

<form class="needs-validation" id="pageForm" novalidate="novalidate" action="process.php" method="post">

<div class="row">
<div class="col-12">
  <div class="card">
      <div class="card-body">

          <div class="col-lg-12">
              <div class="row text-lg-right  form-group">
                  <div class="col-md-6"></div>
                  <div class="col-md-6 col-xs-6">
                      <a class="btn w-sm btn-danger waves-effect waves-light" onclick="userlist();">
                          <i class="mdi mdi-keyboard-return"></i>&nbsp;Back
                      </a>
                          <div class="btn-group">
                              <button type="submit" class="btn w-sm btn-success waves-effect waves-light" onclick="saveType('SaveEdit')">
                                  <i class="mdi mdi-content-save-edit"></i>&nbsp;Save
                              </button>

                              <a class="dropdown-toggle btn w-sm btn-success waves-effect waves-light" data-toggle="dropdown" href="#" banner="button" aria-haspopup="false" aria-expanded="false">
                                  <i class="mdi mdi-chevron-down"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                  <!-- item-->
                                  <button type="submit" onclick="saveType('SaveClose')" class="dropdown-item notify-item">
                                      <i class="mdi mdi-content-save-move"></i>
                                      <span>Save &amp; Close</span>
                                  </button>

                                      <div class="dropdown-divider"></div>
                                      <button type="submit" onclick="saveType('SaveAddNew')" class="dropdown-item notify-item">
                                          <i class="mdi mdi-content-save"></i>
                                          <span>Save &amp; New</span>
                                      </button>
                              </div>
                          </div>
                  </div>
              </div>
          </div>

          <input type="hidden" name="appClientID" id="appClientID">
          <div class="row">
              <div class="col-lg-12">

                  <div class="row">
                      <div class="col-lg-6">
                          <div class="form-group row">
                              <label class="col-sm-3 col-xs-12 col-form-label">Parent Name</label>
                              <div class="col-sm-8 col-xs-12">
                                  <div class="form-control ParentName" onclick="SelectParent()" id="ParentName">Shiv4400</div>
                                  <input type="hidden" id="Clientname" name="Clientname" >
                                  <input type="hidden" id="Username" name="Username" value="">
                                  <input type="hidden" id="FormOperation" name="">
                                  <input type="hidden" id="Password" name="Password" value="">
                                  <input type="hidden" id="isEdit" name="isEdit" value="">
                                  <input type="hidden" id="appMarketMinCommission" value="0">
                                  <input type="hidden" id="appSessionMaxCommission" value="100">
                                  <input type="hidden" id="strPoint" name="strPoint">


                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-xs-12 col-form-label" for="Clientname">Client Name</label>
                              <div class="col-sm-8 col-xs-12">
                                  <input type="text" id="Clientname" name="Clientname" class="form-control" onchange="return maxchar(this, event);" onblur="return NameCheck(this);" max="20" required="">
                                  <div class="invalid-feedback">
                                      Please enter Client Name.
                                  </div>
                              </div>
                              <div class="clearfix"></div>
                              <div class="col-md-offset-4 col-md-8">
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-xs-6 col-form-label" for="Username">Username</label>
                              <div class="col-sm-8 col-xs-6">
                                  <input type="text" id="Username" name="Username" class="form-control" onblur="usernamecheck(this);" onchange="maxchar(this, event);" onkeypress="maxchar(this, event);" max="20" required="">
                                  <div class="invalid-feedback">
                                      Please enter User Name.
                                  </div>
                              </div>
                          </div>

                          <div class="form-group row" id="tblPassword">
                              <label class="col-sm-3 col-xs-12 col-form-label" for="Password">Password</label>
                              <div class="col-sm-8 col-xs-12">
                                  <div class="input-group input-group-merge">
                                      <input type="password" id="Password" name="Password" ename="Password" class="form-control" onchange="return maxchar(this, event);" onblur="passwordcheck(this);" max="20" min="6" required="">
                                      <div class="input-group-append" data-password="false">
                                          <div class="input-group-text">
                                              <span class="password-eye"></span>
                                          </div>
                                      </div>
                                      <div class="invalid-feedback">
                                          Please enter Password.
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="form-group row">
                              <label class="col-sm-3 col-xs-12 col-form-label" for="Reference">Reference</label>
                              <div class="col-sm-8 col-xs-12">
                                  <input type="text" id="Reference" name="Reference" class="form-control">
                              </div>

                          </div>

                      </div>
                      <div class="col-lg-6">
                          <div class="form-group row">
                              <label class="col-sm-3 col-xs-12 col-form-label" for="Point">Point</label>
                              <div class="col-sm-8 col-xs-12">
                                  <input id="Point" type="text" name="Point" class="form-control number" maxlength="6" disabled="disabled">
                                  <input type="hidden" name="hdnappPoint" id="hdnappPoint" value="1">
                              </div>

                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-xs-6 col-form-label" for="Ecposurelimit">Exposure Limit</label>
                              <div class="col-sm-8 col-xs-6">
                                  <div class="input-group">
                                      <input id="Exposurelimit" type="text" name="Exposurelimit" class="form-control  numeric-negative" max="99999999.99" min="-1" required="">
                                      <span class="input-group-text hidden-sm">PTS</span>
                                  </div>
                                  <div class="notefont">
                                      [ Note: Point ( if No Limit then Enter -1 ) ]
                                  </div>
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-xs-12 col-form-label" for="Marketcommission">Market Commission</label>
                              <div class="col-sm-8 col-xs-12">
                                  <input id="Marketcommission" type="text" name="Marketcommission" class="form-control numeric" onblur="MarketCommission()" required="" min="0" max="100">
                                  <div class="invalid-feedback">
                                      Please enter Market Commission.
                                  </div>
                              </div>
                          </div>
                          <div class="form-group row">
                              <label class="col-sm-3 col-xs-12 col-form-label" for="Sessioncommission">Session Commission</label>
                              <div class="col-sm-8 col-xs-12">
                                  <input id="Sessioncommission" type="text" name="Sessioncommission" class="form-control numeric" onblur="SessionCommission()" required="" min="0" max="100">
                                  <div class="invalid-feedback">
                                      Please enter Session Commission.
                                  </div>
                              </div>
                          </div>

                      </div>

                  </div>

                  <div class="row">
                      <div class="col-lg-6">
                          <div class="form-group row">
                              <label class="col-sm-3 col-xs-12 col-form-label">Is Approved </label>
                              <div class="col-sm-8 col-xs-12">
                                  <span class="custom-control custom-switch col-form-label">
                                      <input type="checkbox" id="chkIsApproved" class="custom-control-input">
                                      <label class="custom-control-label" for="chkIsApproved"></label>
                                      <input type="hidden" name="appIsApproved" id="hdnappIsApproved">
                                  </span>
                              </div>

                          </div>

                      </div>

                  </div>
              </div>
          </div>



      </div>
  </div>
</div>
</div>
</form>

</div>
<script>
$(document).ready(function () {
LoadView("dashboard");
});
</script>


          <!-- end page title -->
      </div> <!-- container -->
  </div> <!-- content -->
</div>`;
}

function AddAgent() {
  document.querySelector(
    ".total"
  ).innerHTML = `<div class="content-page" style="background-size: 0px; margin-left:0;margin-top:0;">
         <div class="content">
             <!-- Start Content-->
             <div class="container-fluid">
                 <div class="Loading" style="display: none;">
                     <button class="btn" type="button" disabled="">
                         <span class="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                         Loading...
                     </button>
                 </div>
                 <div class="page-loading" style="display:none">
                     <!--<div class="card">
                         <div class="card-body text-center">
                             <div class="spinner-grow text-primary m-2" role="status"></div>
                             <div class="spinner-grow text-secondary m-2" role="status"></div>
                             <div class="spinner-grow text-success m-2" role="status"></div>
                             <div class="spinner-grow text-danger m-2" role="status"></div>
                             <div class="spinner-grow text-warning m-2" role="status"></div>
                             <div class="spinner-grow text-info m-2" role="status"></div>
                             <div class="spinner-grow text-dark m-2" role="status"></div>
                             <div class="spinner-grow text-blue m-2" role="status"></div>
                             <div class="spinner-grow text-pink m-2" role="status"></div>
                         </div>-->
                     <!--end card-body-->
                     <!--</div>--><!--end card-->
                 </div>
                 <div class="divNews pt-1 d-lg-none d-sm-block">
                     <marquee behavior="scroll" direction="left" id="news" onmouseover="this.stop();" onmouseout="this.start();" class="vertical-align-middle">
                         <div id="NewsDisplayBody"><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Jo bhi client 5-10 sec me Lay/Back karega uski bets delete ki jaayegi aur valid nhi maani jaayegi. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Our Centre Server facing malware attack So for now all system down. We setup new server once it will complete we inform you. It will setup in minimum 4 hours. Sorry for Inconvenience. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Dear Clients, Due to server issue site bnd hone ki vjah se all client ki bets cancel ki gyi he chahe woh loss me tha chahe woh profit me tha so please support with us. Sorry for Inconvenience.  &nbsp;&nbsp;&nbsp;&nbsp;         </div></div>
                     </marquee>
                 </div>
                 <!-- start page title -->
                 
     <div id="pageData">
     <script>
     var vParentName = '';
     var vParentId = '';
     var agentEnum = '2';
     var vAgentId = '';
     var strGames = 'SportGame,LiveCasino,LiveCasinoVeronica,Binary,SlotGames,EzugiCasino,Evolution';
     var iGames = '1,2,3,4,5,6,7';
     var commissionOnPLEnum = parseInt('2');
     var commissionDirectToParentEnum  = parseInt('3');
     var ReadOnly = '';
     var vIsSuperAdmin = 'false' == "true" ? true : false;
     var lstChildLevel = '[{&quot;Key&quot;:&quot;SubAgent&quot;,&quot;Value&quot;:1},{&quot;Key&quot;:&quot;Agent&quot;,&quot;Value&quot;:2},{&quot;Key&quot;:&quot;SubMaster&quot;,&quot;Value&quot;:3},{&quot;Key&quot;:&quot;Master&quot;,&quot;Value&quot;:4},{&quot;Key&quot;:&quot;SuperMaster&quot;,&quot;Value&quot;:5},{&quot;Key&quot;:&quot;SubAdmin&quot;,&quot;Value&quot;:6},{&quot;Key&quot;:&quot;Admin&quot;,&quot;Value&quot;:7}]';
     </script>
     <script>
     $(document).ready(function () {
     document.title='User List';
     });
     </script>
     
     <div id="UserTreeModalDiv"></div>
     
     <script src="/js/agentdetails.min.js?v=0.0.0.195" asp-append-version="true"></script>
     
     <div class="row">
     <div class="col-12">
     <div class="page-title-box">
         <div class="page-title-right">
         </div>
         <h4 class="page-title">Add / Edit Agent</h4>
     </div>
     </div>
     </div>
     
     <form class="needs-validation" id="pageForm" novalidate="novalidate" action="Process1.php" method="post">
     
     <div class="row">
     <div class="col-12">
         <div class="card">
             <div class="card-body">
     
                 <div class="col-lg-12">
                     <div class="row text-lg-right  form-group">
                         <div class="col-md-6"></div>
                         <div class="col-md-6 col-xs-6">
                             <a class="btn w-sm btn-danger waves-effect waves-light" onclick="RedirectAgent();">
                                 <i class="mdi mdi-keyboard-return"></i>&nbsp;Back
                             </a>
                                 <div class="btn-group">
                                     <button type="submit" class="btn w-sm btn-success waves-effect waves-light" onclick="saveType('SaveEdit')">
                                         <i class="mdi mdi-content-save-edit"></i>&nbsp;Save
                                     </button>
     
                                     <a class="dropdown-toggle btn w-sm btn-success waves-effect waves-light" data-toggle="dropdown" href="#" banner="button" aria-haspopup="false" aria-expanded="false">
                                         <i class="mdi mdi-chevron-down"></i>
                                     </a>
                                     <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                         <!-- item-->
                                         <button type="submit" onclick="saveType('SaveClose')" class="dropdown-item notify-item">
                                             <i class="mdi mdi-content-save-move"></i>
                                             <span>Save &amp; Close</span>
                                         </button>
     
                                             <div class="dropdown-divider"></div>
                                             <button type="submit" onclick="saveType('SaveAddNew')" class="dropdown-item notify-item">
                                                 <i class="mdi mdi-content-save"></i>
                                                 <span>Save &amp; New</span>
                                             </button>
                                     </div>
                                 </div>
                         </div>
                     </div>
                 </div>
     
                 <div class="visible-xs"><br><br></div>
                 <input type="hidden" name="appAgentID" id="appAgentID">
                 <div class="row">
                     <div class="col-lg-12">
                         <!-- Portlet card -->
                         <div class="accordion custom-accordion" id="custom-accordion-one">
                             <div class="card  mb-0">
                                 <div class="card-header" id="headingcardPersonal">
                                     <h5 class="m-0 position-relative">
                                         <a class="custom-accordion-title text-reset d-block" data-toggle="collapse" href="#cardPersonal" aria-expanded="true" aria-controls="cardPersonal">
                                             Personal Details <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                         </a>
                                     </h5>
     
                                 </div>
                                 <div id="cardPersonal" class="collapse show" aria-labelledby="headingcardPersonal" data-parent="#custom-accordion-one">
                                     <div class="Portletcard-body">
                                         <div class="row">
                                             <div class="col-lg-6">
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label">Parent Name</label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <div class="form-control ParentName" onclick="SelectParent()" id="ParentName">Shiv4400</div>
                                                         <input type="hidden" id="strUserId" name="strUserId" value="5A5649762B324D574F6C493D">
                                                         <input type="hidden" id="strAgentId" name="strAgentId" value="">
                                                         <input type="hidden" id="FormOperation" name="">
                                                         <input type="hidden" id="isAdd" name="isAdd" value="">
                                                         <input type="hidden" id="isEdit" name="isEdit" value="">
                                                         <input type="hidden" id="strShares" name="strShares" value="">
     
                                                     </div>
                                                 </div>
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label" for="Agentname">Agent Name</label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <input type="text" id="Agentname" name="Agentname" class="form-control" onchange="maxchar(this, event);" onblur="NameCheck(this);" onkeypress="maxchar(this, event);" max="20" required="">
                                                         <div class="invalid-feedback">
                                                             Please enter Agent Name.
                                                         </div>
                                                     </div>
                                                 </div>
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-6 col-form-label" for="Username">Username</label>
                                                     <div class="col-sm-8 col-xs-6">
                                                         <input type="text" id="Userame" name="Username" class="form-control" onblur="usernamecheck(this);" onchange="maxchar(this, event);" onkeypress="maxchar(this, event);" max="20" required="">
                                                         <div class="invalid-feedback">
                                                             Please enter User Name.
                                                         </div>
                                                     </div>
                                                 </div>
     
                                                 <div class="form-group row" id="tblPassword">
                                                     <label class="col-sm-3 col-xs-12 col-form-label" for="Password">Password</label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <div class="input-group input-group-merge">
                                                             <input type="password" id="Password" name="Password" ename="Password" class="form-control" onchange="return maxchar(this, event);" onblur="passwordcheck(this);" max="20" min="6" required="">
                                                             <div class="input-group-append" data-password="false">
                                                                 <div class="input-group-text">
                                                                     <span class="password-eye"></span>
                                                                 </div>
                                                             </div>
                                                             <div class="invalid-feedback">
                                                                 Please enter Password.
                                                             </div>
                                                         </div>
                                                     </div>
     
                                                 </div>
     
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label" for="Reference">Reference</label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <input type="text" id="Reference" name="Reference" class="form-control">
                                                     </div>
     
                                                 </div>
     
                                             </div>
                                             <div class="col-lg-6">
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label" for="Childlevel">Child Level</label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <div class="input-group">
                                                             <select id="ddlMaxChild" class="form-control" ename="Child Level" onchange="return maxnumber(this,event)" onclick="return IsAllownumeric(event, this)"><option value="3">3 - SubMaster</option><option value="2">2 - Agent</option><option value="1">1 - SubAgent</option></select><input type="hidden" id="hdnappMaxChild" value="4">
                                                             <span class="input-group-text">No</span>
                                                         </div>
                                                     </div>
     
     
                                                 </div>
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label" for="Point">Point</label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <input id="Point" type="text" class="form-control number" name="Point" maxlength="6" disabled="disabled">
                                                         <input type="hidden" name="hdnappPoint" id="hdnappPoint" value="1">
                                                     </div>
     
                                                 </div>
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-6 col-form-label" for="Exposurelimit">Exposure Limit</label>
                                                     <div class="col-sm-8 col-xs-6">
                                                         <div class="input-group">
                                                             <input id="Exposurelimit" type="text" class="form-control numeric-negative" name="Exposurelimit" max="99999999.99" min="-1" required="">
                                                             <span class="input-group-text hidden-sm">PTS</span>
                                                         </div>
                                                         <div class="notefont">
                                                             [ Note: Point ( if No Limit then Enter -1 ) ]
                                                         </div>
                                                     </div>
                                                 </div>
                                                 <div class="form-group row">
                                                     <div class="col-sm-3 col-xs-12 col-form-label"></div>
                                                     <div class="col-sm-8 col-xs-12 input-group">
     
                                                     </div>
     
                                                 </div>
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label" for="Remark">Remark</label>
                                                     <div class="col-sm-8 col-xs-12 input-group">
                                                         <input type="text" id="Remark" class="form-control" name="Remark">
                                                     </div>
                                                 </div>
     
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <!-- end card-->
                         </div>
                         <div class="accordion custom-accordion" id="custom-accordion-two">
                             <!-- Portlet card -->
                             <div class="card  mb-0" id="divCreditReference">
                                 <div class="card-header" id="headingcardSharing">
                                     <h5 class="m-0 position-relative">
                                         <a class="custom-accordion-title text-reset d-block" data-toggle="collapse" href="#creditReference" aria-expanded="true" aria-controls="cardSharing">
                                             Credit <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                         </a>
                                     </h5>
                                 </div>
                                 <div id="creditReference" class="collapse show" aria-labelledby="headingcardSharing" data-parent="#custom-accordion-two">
                                     <div class="Portletcard-body">
                                         <div class="row">
                                             <div class="col-lg-6">
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label">Credit Reference<span class="text-danger">*</span></label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <input type="text" id="txtCreditReference" ename="Credit" class="form-control numeric" required="" value="0">
                                                         <div class="invalid-feedback">
                                                             Please enter Credit.
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div class="col-lg-6">
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label">Remark<span class="text-danger">*</span></label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <input type="text" id="txtCreditRemark" ename="Credit Remark" class="form-control" value="Deposit Credit">
                                                         <div class="invalid-feedback">
                                                             Please enter Remark.
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div> <!-- end card-->
                         </div>
                         <div class="accordion custom-accordion" id="custom-accordion-two">
                             <!-- Portlet card -->
                             <div class="card  mb-0" id="divSharing">
                                 <div class="card-header" id="headingcardSharing">
                                     <h5 class="m-0 position-relative">
                                         <a class="custom-accordion-title text-reset d-block" data-toggle="collapse" href="#cardSharing" aria-expanded="true" aria-controls="cardSharing">
                                             Sharing <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                         </a>
                                     </h5>
     
     
                                 </div>
                                 <div id="cardSharing" class="collapse show" aria-labelledby="headingcardSharing" data-parent="#custom-accordion-two">
                                     <div class="Portletcard-body">
                                         <div class="row">
                                             <div class="col-lg-12">
                                                 <div class="ShareTables">
                                                     <div id="ShareTables" class="table-responsive">
                                                         <table class="table table-hover table-bordered">
                                                             <thead>
                                                                 <tr>
                                                                     <td>Game</td>
                                                                     <td style="min-width: 130px;" class="text-right">Share</td>
                                                                     <td style="min-width: 130px;" class="text-right">Parent Share</td>
                                                                 </tr>
                                                             </thead>
                                                             <tbody id="userShareBody"><tr class="shareTr shareTr_2">         <td>             Other Casino         </td>         <td class="text-right">             <input type="text" ename="Other Casino Share" class="text-right form-control d-inline-block numeric sharetxt dUserShares UserShares_2" maxlength="5" onkeyup="ShareChange(this)" min="0" max="89.00" id="OwnShare_2" value="0.00" required="" style="width:80%;"><span class="SharePercentage">%</span>         </td>         <td class="text-right">             <input class="lblTextBox1 text-right dParentShares d-inline-block form-control ParentShares_2" maxlength="5" disabled="" id="NewParentShare_2" value="89.00" style="width:80%;"><span class="SharePercentage">%</span>             <input type="hidden" id="ParentShare_2" value="89.00">         </td>     </tr><tr class="shareTr shareTr_1">         <td>             Sport Game         </td>         <td class="text-right">             <input type="text" ename="Sport Game Share" class="text-right form-control d-inline-block numeric sharetxt dUserShares UserShares_1" maxlength="5" onkeyup="ShareChange(this)" min="0" max="92.00" id="OwnShare_1" value="0.00" required="" style="width:80%;"><span class="SharePercentage">%</span>         </td>         <td class="text-right">             <input class="lblTextBox1 text-right dParentShares d-inline-block form-control ParentShares_1" maxlength="5" disabled="" id="NewParentShare_1" value="92.00" style="width:80%;"><span class="SharePercentage">%</span>             <input type="hidden" id="ParentShare_1" value="92.00">         </td>     </tr><tr class="shareTr shareTr_3">         <td>             Our Casino         </td>         <td class="text-right">             <input type="text" ename="Our Casino Share" class="text-right form-control d-inline-block numeric sharetxt dUserShares UserShares_3" maxlength="5" onkeyup="ShareChange(this)" min="0" max="92.00" id="OwnShare_3" value="0.00" required="" style="width:80%;"><span class="SharePercentage">%</span>         </td>         <td class="text-right">             <input class="lblTextBox1 text-right dParentShares d-inline-block form-control ParentShares_3" maxlength="5" disabled="" id="NewParentShare_3" value="92.00" style="width:80%;"><span class="SharePercentage">%</span>             <input type="hidden" id="ParentShare_3" value="92.00">         </td>     </tr></tbody>
                                                         </table>
                                                     </div>
                                                 </div>
     
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <!-- end card-->
                         </div>
                         <div class="accordion custom-accordion" id="custom-accordion-three">
                             <!-- Portlet card -->
                             <div class="card mb-0">
                                 <div class="card-header" id="headingcardMarketCommision">
     
                                     <h5 class="m-0 position-relative">
                                         <a class="custom-accordion-title text-reset d-block" data-toggle="collapse" href="#cardMarketCommision" aria-expanded="true" aria-controls="cardMarketCommision">
                                             Market Commission Type <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                         </a>
                                     </h5>
     
                                 </div>
                                 <div id="cardMarketCommision" class="collapse show" aria-labelledby="headingcardMarketCommision" data-parent="#custom-accordion-three">
                                     <div class="Portletcard-body">
                                         <div class="row">
                                             <div class="col-lg-6">
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label">Commission Type</label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <select class="form-control AllowDecimal" disabled="disabled" id="ddlCommissionType" name="ddlCommissionType" onblur="return CommissionTypecheck()" onchange="return CommisionChange(this)" required="required"><option value="">Select Commission Type</option>
     <option value="1">CommissionOnShare</option>
     <option value="2">CommissionOnPL</option>
     <option value="3">CommissionDirectToParent</option>
     </select>
                                                         <input type="hidden" name="appCommissionType" id="hdnappCommissionType" value="1">
                                                     </div>
                                                 </div>
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label">Market Commission</label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <input id="nubMarketCommission" type="number" ename="Market Commission" class="form-control numeric" onblur="MarketCommission()" required="" disabled="disabled">
                                                         <div class="invalid-feedback">
                                                             Please enter Market Commission.
                                                         </div>
                                                     </div>
                                                 </div>
     
     
                                             </div>
                                             <div class="col-lg-6">
                                                 <div class="form-group rowmt-3">
                                                     <label class="col-sm-3 col-xs-12 col-form-label">Market Min. &amp; Max Commission</label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <div class="row">
                                                             <div class="col-6">
     
                                                                 <input id="txtMarketMinCommission" type="text" ename="Market Min. Commission" class="form-control numeric" required="" min="0" max="100">
                                                                 <input type="hidden" name="hdnappMarketMinCommission" id="hdnappMarketMinCommission" value="0">
                                                                 <div class="invalid-feedback">
                                                                     Please enter Market Min. Commission.
                                                                 </div>
                                                             </div>
                                                             <div class="col-6">
     
                                                                 <input id="txtMarketMaxCommission" type="text" ename="Market Max Commission" onblur="MarketMaxCommission()" class="form-control numeric" required="" min="0" max="100">
                                                                 <input type="hidden" name="hdnappMarketMaxCommission" id="hdnappMarketMaxCommission" value="100">
                                                                 <div class="invalid-feedback">
                                                                     Please enter Market Max. Commission.
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <!-- end card-->
                         </div>
                         <div class="accordion custom-accordion" id="custom-accordion-four">
                             <!-- Portlet card -->
                             <div class="card mb-0">
                                 <div class="card-header" id="headingcardSessionCommision">
                                     <h5 class="m-0 position-relative">
                                         <a class="custom-accordion-title text-reset d-block" data-toggle="collapse" href="#cardSessionCommision" aria-expanded="true" aria-controls="cardSessionCommision">
                                             Session Commission Type <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                         </a>
                                     </h5>
     
                                 </div>
                                 <div id="cardSessionCommision" class="collapse show" aria-labelledby="headingcardSessionCommision" data-parent="#custom-accordion-four">
                                     <div class="Portletcard-body">
                                         <div class="row">
                                             <div class="col-lg-6">
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label">Session Commission</label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <input id="txtSessionCommission" type="text" ename="Session Commission" class="form-control numeric" onblur="SessionCommission()" onkeypress="maxnumber(this)" required="">
                                                         <div class="invalid-feedback">
                                                             Please enter Session Commission.
                                                         </div>
                                                     </div>
                                                 </div>
     
     
     
                                             </div>
                                             <div class="col-lg-6">
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label">Session Min. &amp; Max Commission</label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <div class="row">
                                                             <div class="col-6">
     
                                                                 <input id="txtSessionMinCommission" type="text" ename="Session Min. Commission" class="form-control numeric" required="" min="0" max="100">
                                                                 <input type="hidden" name="hdnappSessionMinCommission" id="hdnappSessionMinCommission" value="0">
                                                                 <div class="invalid-feedback">
                                                                     Please enter Session Min. Commission.
                                                                 </div>
                                                             </div>
                                                             <div class="col-6">
     
                                                                 <input id="txtSessionMaxCommission" type="text" ename="Session Max Commission" onblur="SessionMaxCommission()" class="form-control numeric" required="" min="0" max="100">
                                                                 <input type="hidden" name="hdnappSessionMaxCommission" id="hdnappSessionMaxCommission" value="100">
                                                                 <div class="invalid-feedback">
                                                                     Please enter Session Max. Commission.
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
     
     
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div> <!-- end card-->
                         </div>
     
                         <div class="accordion custom-accordion" id="custom-accordion-seven">
                             <!-- Portlet card -->
                             <div class="card mb-0">
                                 <div class="card-header" id="headingcardPermissions">
                                     <h5 class="m-0 position-relative">
                                         <a class="custom-accordion-title text-reset d-block" data-toggle="collapse" href="#cardPermissions" aria-expanded="true" aria-controls="cardPermissions">
                                             Permissions <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                         </a>
                                     </h5>
     
                                 </div>
                                 <div id="cardPermissions" class="collapse show" aria-labelledby="headingcardPermissions" data-parent="#custom-accordion-seven">
                                     <div class="Portletcard-body">
                                         <div class="row">
                                             <div class="col-lg-6">
                                                 <div class="form-group row">
                                                     <label class="col-sm-3 col-xs-12 col-form-label">Is Approved </label>
                                                     <div class="col-sm-8 col-xs-12">
                                                         <span class="custom-control custom-switch col-form-label">
                                                             <input type="checkbox" id="chkIsApproved" class="custom-control-input">
                                                             <label class="custom-control-label" for="chkIsApproved"></label>
                                                             <input type="hidden" name="appIsApproved" id="hdnappIsApproved">
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
     
                                         </div>
                                     </div>
                                 </div> <!-- end card-->
                             </div>
                         </div>
                     </div>
     
     
     
                 </div>
             </div>
         </div>
     </div>
     
     
     
     <script type="text/x-jquery-tmpl" id="tmplUserShareList">
     <tr class="shareTr shareTr_{appGameType}">
     <td>
         {strGameType}
     </td>
     <td class="text-right">
         <input type="text" eName="{strGameType} Share" class="text-right form-control d-inline-block numeric sharetxt dUserShares UserShares_{appGameType}" maxlength="5"  onkeyup="ShareChange(this)"  min="0" max="{appParentShare}" id="OwnShare_{appGameType}" value="{appOwnShare}" required  style="width:80%;" /><span class="SharePercentage">%</span>
     </td>
     <td class="text-right">
         <input class="lblTextBox1 text-right dParentShares d-inline-block form-control ParentShares_{appGameType}" maxlength="5" disabled id="NewParentShare_{appGameType}" value="{appParentShare}" style="width:80%;" /><span class="SharePercentage">%</span>
         <input type="hidden" id="ParentShare_{appGameType}" value="{appParentShare}" />
     </td>
     </tr>
     </script>
     <script type="text/x-jquery-tmpl" id="tmplUserShareListEdit">
     <tr class="shareTr shareTr_{appGameType}">
     <td>
         {strGameType}
     </td>
     <td class="text-right">
         <div class="text-right form-control numeric d-inline-block sharetxt dUserShares UserShares_{appGameType}" id="OwnShare_{appGameType}" style="width:80%;">{appOwnShare} </div><span class="SharePercentage">%</span>
     </td>
     <td class="text-right">
         <div class="lblTextBox1 text-right dParentShares d-inline-block form-control ParentShares_{appGameType}" style="width:80%;"> {appParentShare}</div>
         <input type="hidden" id="ParentShare_{appGameType}" value="{appParentShare}" />
     </td>
     </tr>
     </script></div></form></div>
     <script>
     $(document).ready(function () {
     LoadView("dashboard");
     });
     </script>
     
     
                 <!-- end page title -->
             </div> <!-- container -->
         </div> <!-- content -->
     </div>`;
}

function riskanalysis() {
  document.querySelector(
    ".total"
  ).innerHTML = `<div class="content-page" style="background-size: 0px;margin-left:0;
       margin-top:0;">
     <div class="content">
         <!-- Start Content-->
         <div class="container-fluid">
             <div class="Loading" style="display:none">
                 <button class="btn" type="button" disabled="">
                     <span class="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                     Loading...
                 </button>
             </div>
             <div class="page-loading" style="display:none">
                 <!--<div class="card">
                     <div class="card-body text-center">
                         <div class="spinner-grow text-primary m-2" role="status"></div>
                         <div class="spinner-grow text-secondary m-2" role="status"></div>
                         <div class="spinner-grow text-success m-2" role="status"></div>
                         <div class="spinner-grow text-danger m-2" role="status"></div>
                         <div class="spinner-grow text-warning m-2" role="status"></div>
                         <div class="spinner-grow text-info m-2" role="status"></div>
                         <div class="spinner-grow text-dark m-2" role="status"></div>
                         <div class="spinner-grow text-blue m-2" role="status"></div>
                         <div class="spinner-grow text-pink m-2" role="status"></div>
                     </div>-->
                 <!--end card-body-->
                 <!--</div>--><!--end card-->
             </div>
             <div class="divNews pt-1 d-lg-none d-sm-block">
                 <marquee behavior="scroll" direction="left" id="news" onmouseover="this.stop();" onmouseout="this.start();" class="vertical-align-middle">
                     <div id="NewsDisplayBody"><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Jo bhi client 5-10 sec me Lay/Back karega uski bets delete ki jaayegi aur valid nhi maani jaayegi. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Our Centre Server facing malware attack So for now all system down. We setup new server once it will complete we inform you. It will setup in minimum 4 hours. Sorry for Inconvenience. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Dear Clients, Due to server issue site bnd hone ki vjah se all client ki bets cancel ki gyi he chahe woh loss me tha chahe woh profit me tha so please support with us. Sorry for Inconvenience.  &nbsp;&nbsp;&nbsp;&nbsp;         </div></div>
                 </marquee>
             </div>
             <!-- start page title -->
             
     <div id="pageData"><script>
     $(document).ready(function () {
     document.title = 'Risk Analysis';
     });
     </script>
     
     <style>
     body[theme=dark] .widget-rounded-circle {
     background-color: #3b4651;
     }
     
     body[theme=light] .widget-rounded-circle {
     background-color: #f3f7f9;
     }
     
     .card-body {
     min-height: 100px;
     }
     
     .table {
     margin-bottom: 0;
     }
     
     .table-wrap {
     border: 1px solid rgba(209, 208, 209, 0.29) !important
     }
     
     .table-book, .table-book td, .table-book th {
     border: none !important;
     }
     body[theme=light] .market-row:hover {
     background-color: #ffffff !important;
     box-shadow: inset 0 0 30px #ddd;
     }
     
     body[theme=dark] .market-row:hover {
     background-color: #4f5c69;
     }
     
     .table-book td {
     border: none;
     padding: 0.2rem;
     }
     
     .table-book td:not(:last-child) {
     border-right: 1px solid rgba(209, 208, 209, 0.29) !important;
     }
     
     .notification-list-grid > .waves-effect {
     padding: 0.5rem 0.8rem;
     }
     
     .table thead th {
     padding: 4px;
     text-align: center;
     }
     
     .BackColor {
     background-color: #bbe1ee !important;
     border-top-left-radius: 4px;
     border-bottom-left-radius: 4px;
     }
     
     .Laycolor {
     background-color: #f6c5c8 !important;
     border-top-right-radius: 4px;
     border-bottom-right-radius: 4px;
     }
     
     .ratebox {
     display: inherit;
     padding-right: 3px;
     padding-left: 3px;
     }
     
     .price {
     font-weight: 600;
     line-height: 18px;
     color: #444;
     font-size: 14px;
     }
     
     .datatable {
     border-color: rgba(209, 208, 209, 0.29) !important;
     }
     
     @media only screen and (max-width: 767px) {
     .container-fluid {
     padding: 5px;
     }
     }
     
     .superadmin {
     margin-top: 12px;
     margin-bottom: auto;
     }
     
     .sideoptions {
     margin-bottom: auto;
     }
     </style>
     <!-- start page title -->
     <div class="row">
     <div class="col-12">
     <div class="page-title-box">
     <h4 class="page-title">RiskAnalysis</h4>
     </div>
     </div>
     </div>
     <!-- end page title -->
     
     <div class="row d-flex flex-row-reverse">
     
     <div class="col-xl-12 col-sm-12">
     
     <div class="card">
     <ul class="nav nav-tabs nav-bordered pb-1">
         <li class="nav-item dashboard-detailview-box">
             <label class="lblDetailView">Risk Analysis</label>
             <div class="d-inline-flex pr-2">
                 <span id="PointDetail" class="font-weight-bold Text-15">
                     <label class="switch1 vertical-align-middle">
                         <input type="checkbox" class="px" id="chkDetailView" checked="" name="rbtn" onchange="GetDetailView();">
                         <div class="slider1 round1">
                             <span class="on">True</span>
                             <span class="off">False</span>
                         </div>
                     </label>
                 </span>
             </div>
             <div class="clsSharing d-inline-flex text-center mt-1 pr-4 hide">
                 <span id="PointDetail1" class="font-weight-bold Text-15">
                     <label class="switch1 vertical-align-middle">
                         <input type="checkbox" id="rbtnSharing" name="rbtn" checked="">
                         <div class="toggle-switch-slider toggle-switch-round">
                             <span class="toggle-switch-on">Sharing Book</span>
                             <span class="toggle-switch-off">Sharing Book</span>
                         </div>
                     </label>
                 </span>
             </div>
             <div class="d-inline-flex">
                 <span id="" class="font-weight-bold Text-15">
                     <label class="switch1 vertical-align-middle">
                         <input type="checkbox" class="px" id="rbtnOldNew" name="rbtnOldNew">
                         <div class="sliderPts roundPts">
                             <span class="onRound">New</span>
                             <span class="offRound">Old</span>
                         </div>
                     </label>
                 </span>
             </div>
             <div class="d-inline-flex">
                 <span id="PointDetail" class="font-weight-bold Text-15">
                     <label class="switch1 vertical-align-middle">
                         <input type="checkbox" class="px" id="rbtnPTSINR" name="rbtn" onchange="PTSINR();">
                         <div class="sliderPts roundPts">
                             <span class="onRound">PTS</span>
                             <span class="offRound">INR</span>
                         </div>
                     </label>
                 </span>
             </div>
            
         </li>
         <li class="nav-item dashboard-search-box">
             <input type="text" id="txtSearch" class="form-control " placeholder="Search">
         </li>
         <li class="nav-item">
             <a href="#AllMatch" onclick="loadMarketTab('type-inplay')" data-toggle="tab" aria-expanded="false" class="nav-link active">
                 In-Play
             </a>
         </li>
         <li class="nav-item">
             <a href="#AllMatch" onclick="loadMarketTab('type-all')" data-toggle="tab" aria-expanded="true" class="nav-link">
                 All Match
             </a>
         </li>
     </ul>
     <div class="col-12 placeholder-content-effect hide">
         <div class="row">
             <div class="col-7 col-xs-12 tr-matchdetail placeholder-content" style="line-height:14px !important; ">
                 <div class="inter-right--first"></div>
                 <div class="inter-right--bottom"></div>
             </div>
             <div class="col-5 col-xs-12 tr-matchdetail text-right placeholder-content">
                 <div class="inter-crop"></div>
                 <div class="inter-right--first"></div>
                 <div class="inter-right--bottom"></div>
             </div>
         </div>
         <div class="row" style="margin-top:25px">
             <div class="col-7 col-xs-12 tr-matchdetail placeholder-content" style="line-height:14px !important; ">
                 <div class="inter-right--first"></div>
                 <div class="inter-right--bottom"></div>
             </div>
             <div class="col-5 col-xs-12 tr-matchdetail text-right placeholder-content">
                 <div class="inter-crop"></div>
                 <div class="inter-right--first"></div>
                 <div class="inter-right--bottom"></div>
             </div>
         </div>
     </div>
     
     <div class="tab-content">
         <div class="tab-pane active" id="AllMatch">
         </div>
     </div>
     </div> <!-- end card-box-->
     </div>
     
     </div>
     
     <script src="/js/riskanalysis.min.js?v=0.0.0.195" asp-append-version="true"></script>
     
     <script type="text/x-jquery-tmpl" id="tmpl_SportsLists_AllMatches_NormalView_Head">
     <div id="tbllist" class="col-12 table dt-responsive nowrap w-100 dataTable">
     <div class="row" id="sportlist-allmatches-body">
     <div id="sportlist-allmatches-noRecord" class="mt-2 load-more col-12 hide table-active hide">
         <div>There is no available match</div>
     </div>
     </div>
     </div>
     </script>
     
     <script id="SportsLists_NormalView" type="text/x-jquery-tmpl">
     
     <div class="font-16 font-weight-bold">
     
     </div>
     </div>
     {{each MatchList}}
     
     <div class="row">
     <div class="col-7 col-xs-12 tr-matchdetail" style="line-height:14px !important; ">
         <div class="row">
             <div class="col-7 col-xs-12">
                 <div class="d-inline-block cursor-pointer icon cursor-pointer collapse show" style="vertical-align:top">
                     <span>
                         <a class="custom-accordion-title text-reset"
                            data-toggle="collapse" 
                            >
                             <i class="mdi mdi-chevron-down accordion-arrow"></i>
                         </a>
                     </span>
                     
                 </div>
                 <div class="d-inline-block">
                     
     </div>
     </div>
     </div>
     </script>
     
     </div>
     <script>
     $(document).ready(function () {
     LoadView("riskanalysis");
     });
     </script>
     
     
             <!-- end page title -->
         </div> <!-- container -->
     </div> <!-- content -->
     </div>`;

  document.querySelector(".nav2-content").style.display = "none";
  pp -= 1;
}

function balancesheet() {
  document.querySelector(
    ".total"
  ).innerHTML = `<div class="content-page" style="background-size: 0px; margin-left:0;margin-top:0;">
         <div class="content">
             <!-- Start Content-->
             <div class="container-fluid">
                 <div class="Loading" style="display: none;">
                     <button class="btn" type="button" disabled="">
                         <span class="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                         Loading...
                     </button>
                 </div>
                 <div class="page-loading" style="display:none">
                     <!--<div class="card">
                         <div class="card-body text-center">
                             <div class="spinner-grow text-primary m-2" role="status"></div>
                             <div class="spinner-grow text-secondary m-2" role="status"></div>
                             <div class="spinner-grow text-success m-2" role="status"></div>
                             <div class="spinner-grow text-danger m-2" role="status"></div>
                             <div class="spinner-grow text-warning m-2" role="status"></div>
                             <div class="spinner-grow text-info m-2" role="status"></div>
                             <div class="spinner-grow text-dark m-2" role="status"></div>
                             <div class="spinner-grow text-blue m-2" role="status"></div>
                             <div class="spinner-grow text-pink m-2" role="status"></div>
                         </div>-->
                     <!--end card-body-->
                     <!--</div>--><!--end card-->
                 </div>
                 <div class="divNews pt-1 d-lg-none d-sm-block">
                     <marquee behavior="scroll" direction="left" id="news" onmouseover="this.stop();" onmouseout="this.start();" class="vertical-align-middle">
                         <div id="NewsDisplayBody"><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Jo bhi client 5-10 sec me Lay/Back karega uski bets delete ki jaayegi aur valid nhi maani jaayegi. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Our Centre Server facing malware attack So for now all system down. We setup new server once it will complete we inform you. It will setup in minimum 4 hours. Sorry for Inconvenience. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Dear Clients, Due to server issue site bnd hone ki vjah se all client ki bets cancel ki gyi he chahe woh loss me tha chahe woh profit me tha so please support with us. Sorry for Inconvenience.  &nbsp;&nbsp;&nbsp;&nbsp;         </div></div>
                     </marquee>
                 </div>
                 <!-- start page title -->
                 
     <div id="pageData"><script>
     var vUserIDChips = '';
     var vUserNameChips = 'Balance Sheet';
     var vCurrency = 'Inr';
     </script>
     <script>
     $(document).ready(function () {
     vIsHistoryData = false;
     document.title='Balance Sheet';
     });
     </script>
     
     <div class="row">
     <div class="col-12">
     <div class="page-title-box">
         <div class="page-title-right">
             <ol class="breadcrumb m-0" id="tabSitemap">
             </ol>
         </div>
         <h4 class="page-title" id="FullNameID">Balance Sheet : Shiv4400</h4>
     </div>
     </div>
     </div>
     
     <script src="/js/balancesheetreport.min.js?v=0.0.0.195" asp-append-version="true"></script>
     
     <div class="row">
     <div class="col-12">
     <div class="card">
         <div class="row">
             <div class="col-sm-9 col-xs-12">
             </div>
             <div class="col-sm-3 col-xs-12 accordion custom-accordion">
                 <h5 class="m-0 position-relative">
                     <a class="custom-accordion-title text-reset collapsed d-block text-right mr-3" data-toggle="collapse" href="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">
                         <span>Advance Search</span> <i class="mdi mdi-chevron-down accordion-arrow"></i>
                     </a>
                 </h5>
             </div><!-- end col-->
         </div>
     
         <div id="collapseFilter" class="collapse">
             <hr>
             <div class="row">
                 <div class="col-lg-5 col-md-8 col-sm-12 col-xs-12">
                     <div class="notification-list">
                         <label class="checkbox checkbox-info mr-1">
                             <input type="checkbox" id="chkIsDate" value="true">
                             <label for="chkIsDate" class="bold">Date Wise</label>
                         </label>
                     </div>
                     <div class="input-group marginb5 div-datepicker">
                         <input type="text" class="form-control datepicker flatpickr-input" name="ReportStartDate" id="StartDateFilter" disabled="" readonly="readonly">
                         <span class="col-form-label">to</span>
                         <input type="text" class="form-control datepicker flatpickr-input" name="ReportEndDate" id="EndDateFilter" disabled="" readonly="readonly">
                     </div>
                 </div>
     
                 <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                     <label class=" d-none d-md-block d-lg-block">&nbsp;</label>
                     <button type="button" class="btn btn-success r-margint25" onclick="SearchData();" id="btnSearch">
                         <i class="fa fa-search"></i>  Search
                     </button>
     
                 </div>
             </div>
             <hr class="hidden-sm hidden-md hidden-lg">
         </div>
         <div id="pageBreadcrumb"></div>
         <div class="col-md-12" id="NoInformationListChipSummery" style="display:none;">
             <table class="table tables_ui">
                 <thead>
                     <tr><td colspan="4" class="information">  No Data Found. </td></tr>
                 </thead>
             </table>
         </div>
     
         <div id="InformationListChipSummery" style="">
             <div class="row">
                 <div class="col-12">
                     <div class="mr-2 float-left">
                         <button class="btn btn-outline-success" onclick="cloneBalanceSheet('Excel')"><span>Excel</span></button>
                         <button class="btn btn-outline-danger" onclick="cloneBalanceSheet('PDF')"><span>PDF</span></button>
                         <button class="btn btn-outline-info" onclick="cloneBalanceSheet('CSV')"><span>CSV</span></button>
                         <div class="d-inline-block marginl15 align-bottom">
                             <span id="PointDetail" class="font-weight-bold Text-15">
                                 <label class="switchPts">
                                     <input type="checkbox" class="px" id="rbtnPTSINR" name="rbtn" checked="" onchange="PTSINR();">
                                     <div class="sliderPts roundPts">
                                         <span class="onRound">PTS</span>
                                         <span class="offRound">INR</span>
                                     </div>
                                 </label>
                             </span>
                         </div>
                     </div>
     
                 </div>
             </div>
         </div>
     </div>
     <div class="card" id="carddata">
         <div class="card-body">
             <div class="row">
                 <div class="col-md-6">
                     <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-1 float-right">
                         <input type="text" id="txtPlusSearch" class="form-control" placeholder="Search Min. 2 characters">
                     </div>
                     <div id="PlusChips" class="table-responsive"><table class="table table-hover table-striped table-bordered table-UserList mb-0" id="tblPlusChips">         <thead>             <tr>                 <td class="nosort border-bottom-success">UserName[FullName]</td>                 <td class="text-right nosort border-bottom-success clsPts">Balance</td>                 <td class="text-right nosort border-bottom-success clsRs hide">Balance</td>                 <td class="text-center nosort border-bottom-success">Action</td>             </tr>         </thead>         <tbody id="tmpltblPlusBody"><tr><td colspan="3" class="text-center">No Data Found</td></tr></tbody>         <tfoot>             <tr>                 <td>Total</td>                 <td class="text-right clsPts">                     <span class="PlusAmountTotalPts">0.00</span>                 </td>                 <td class="text-right clsRs hide">                     <span class="PlusAmountTotalRs">0.00</span>                 </td>                 <td></td>             </tr>         </tfoot>     </table></div>
                 </div>
                 <div class="col-md-6">
                     <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-1 float-right">
                         <input type="text" id="txtMinusSearch" class="form-control" placeholder="Search Min. 2 characters">
                     </div>
                     <div id="MinusChips" class="table-responsive"><table class="table table-hover table-striped table-bordered table-UserList mb-0" id="tblMinusChips">         <thead>             <tr>                 <td class="nosort border-bottom-danger">UserName[FullName]</td>                 <td class="text-right nosort border-bottom-danger clsPts">Balance</td>                 <td class="text-right nosort border-bottom-danger clsRs hide">Balance</td>                 <td class="text-center nosort border-bottom-danger">Action</td>             </tr>         </thead>         <tbody id="tmpltblMinusBody"><tr><td colspan="3" class="text-center">No Data Found</td></tr></tbody>         <tfoot>             <tr>                 <td>Total</td>                 <td class="text-right clsPts">                     <span class="MinusAmountTotalPts">0.00</span>                 </td>                 <td class="text-right clsRs hide">                     <span class="MinusAmountTotalRs">0.00</span>                 </td>                 <td></td>             </tr>         </tfoot>     </table></div>
                 </div>
             </div>
         </div>
     </div>
     </div>
     </div>
     <div class="row hide">
     <div class="col-md-6" id="lefttbl">
     
     </div>
     <div class="col-md-6" id="righttbl">
     
     </div>
     </div>
     <div class="row div-export hide">
     <div class="col-md-12 col-sm-12 col-xs-12" id="exporttbl">
     </div>
     
     </div>
     
     <script type="text/x-jquery-tmpl" id="tmplPlus">
     <table class="table table-hover table-striped table-bordered table-UserList mb-0" id="tblPlusChips">
     <thead>
         <tr>
             <td class="nosort border-bottom-success">UserName[FullName]</td>
             <td class="text-right nosort border-bottom-success clsPts">Balance</td>
             <td class="text-right nosort border-bottom-success clsRs hide">Balance</td>
             <td class="text-center nosort border-bottom-success">Action</td>
         </tr>
     </thead>
     <tbody id="tmpltblPlusBody">
     </tbody>
     <tfoot>
         <tr>
             <td>Total</td>
             <td class="text-right clsPts">
                 <span class="PlusAmountTotalPts"></span>
             </td>
             <td class="text-right clsRs hide">
                 <span class="PlusAmountTotalRs"></span>
             </td>
             <td></td>
         </tr>
     </tfoot>
     </table>
     </script>
     
     <script type="text/x-jquery-tmpl" id="tmpltblData">
     {{each ChipsData}}
     
     {{/each}}
     <tr class="OwnPlPlus" style="display:none;">
     <td>
         <label class="btn btn-primary grid-button OwnPlPlus" style="cursor:text;">Market PL</label>
     </td>
     <td class="text-right clsPts">
         <span id="OwnPlPlusPts" class="OwnPlPlus clsPlusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="OwnPlPlusRs" class="OwnPlPlus clsPlusAmount"></span>
     </td>
     <td></td>
     </tr>
     <tr class="MarketCommissionPlus" style="display:none;">
     <td>
         <label class="btn btn-info grid-button MarketCommissionPlus" style="cursor:text;">Market Commission</label>
     </td>
     <td class="text-right clsPts">
         <span id="MarketCommissionPlusPts" class="MarketCommissionPlus clsPlusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="MarketCommissionPlusRs" class="MarketCommissionPlus clsPlusAmount"></span>
     </td>
     <td></td>
     </tr>
     <tr class="SessionCommissionPlus" style="display:none;">
     <td>
         <label class="btn btn-warning grid-button SessionCommissionPlus" style="cursor:text;">Session Commission</label>
     </td>
     <td class="text-right clsPts">
         <span id="SessionCommissionPlusPts" class="SessionCommissionPlus clsPlusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="SessionCommissionPlusRs" class="SessionCommissionPlus clsPlusAmount"></span>
     </td>
     <td></td>
     </tr>
     <tr class="CashPlus" style="display:none;">
     <td>
         <label class="btn btn-success grid-button CashPlus" style="cursor:text;">Cash</label>
     </td>
     <td class="text-right clsPts">
         <span id="CashPlusPts" class="CashPlus clsPlusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="CashPlusRs" class="CashPlus clsPlusAmount"></span>
     </td>
     <td></td>
     </tr>
     <tr class="ParentPLPlus" style="display:none;">
     <td>
         <label class="btn btn-warning grid-button ParentPLPlus" style="cursor:text;">Settlement (Parent)</label>
     </td>
     <td class="text-right clsPts">
         <span id="ParentPLPlusPts" class="ParentPLPlus clsPlusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="ParentPLPlusRs" class="ParentPLPlus clsPlusAmount"></span>
     </td>
     <td></td>
     </tr>
     <tr class="ParentCashPlus" style="display:none;">
     <td>
         <label class="btn btn-success grid-button ParentCashPlus" style="cursor:text;">Cash (Parent)</label>
     </td>
     <td class="text-right clsPts">
         <span id="ParentCashPlusPts" class="ParentCashPlus clsPlusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="ParentCashPlusRs" class="ParentCashPlus clsPlusAmount"></span>
     </td>
     <td></td>
     </tr>
     </script>
     
     <script type="text/x-jquery-tmpl" id="tmplMinus">
     <table class="table table-hover table-striped table-bordered table-UserList mb-0" id="tblMinusChips">
     <thead>
         <tr>
             <td class="nosort border-bottom-danger">UserName[FullName]</td>
             <td class="text-right nosort border-bottom-danger clsPts">Balance</td>
             <td class="text-right nosort border-bottom-danger clsRs hide">Balance</td>
             <td class="text-center nosort border-bottom-danger">Action</td>
         </tr>
     </thead>
     <tbody id="tmpltblMinusBody">
     </tbody>
     <tfoot>
         <tr>
             <td>Total</td>
             <td class="text-right clsPts">
                 <span class="MinusAmountTotalPts"></span>
             </td>
             <td class="text-right clsRs hide">
                 <span class="MinusAmountTotalRs"></span>
             </td>
             <td></td>
         </tr>
     </tfoot>
     </table>
     </script>
     
     <script type="text/x-jquery-tmpl" id="tmpltblMinusData">
     {{each ChipsData}}
     
     {{/each}}
     <tr class="OwnPlMinus" style="display:none;">
     <td>
         <label class="btn btn-primary grid-button OwnPlMinus" style="cursor:text;">Market PL</label>
     </td>
     <td class="text-right clsPts">
         <span id="OwnPlMinusPts" class="OwnPlMinus clsMinusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="OwnPlMinusRs" class="OwnPlMinus clsMinusAmount"></span>
     </td>
     <td></td>
     </tr>
     <tr class="MarketCommissionMinus" style="display:none;">
     <td>
         <label class="btn btn-info grid-button MarketCommissionMinus" style="cursor:text;">Market Commission</label>
     </td>
     <td class="text-right clsPts">
         <span id="MarketCommissionMinusPts" class="MarketCommissionMinus clsMinusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="MarketCommissionMinusRs" class="MarketCommissionMinus clsMinusAmount"></span>
     </td>
     <td></td>
     </tr>
     <tr class="SessionCommissionMinus" style="display:none;">
     <td>
         <label class="btn btn-warning grid-button SessionCommissionMinus" style="cursor:text;">Session Commission</label>
     </td>
     <td class="text-right clsPts">
         <span id="SessionCommissionMinusPts" class="SessionCommissionMinus clsMinusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="SessionCommissionMinusRs" class="SessionCommissionMinus clsMinusAmount"></span>
     </td>
     <td></td>
     </tr>
     <tr class="CashMinus" style="display:none;">
     <td>
         <label class="btn btn-success grid-button CashMinus" style="cursor:text;">Cash</label>
     </td>
     <td class="text-right clsPts">
         <span id="CashMinusPts" class="CashMinus clsMinusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="CashMinusRs" class="CashMinus clsMinusAmount"></span>
     </td>
     <td></td>
     </tr>
     <tr class="ParentPLMinus" style="display:none;">
     <td>
         <label class="btn btn-warning grid-button ParentPLMinus" style="cursor:text;">Settlement (Parent)</label>
     </td>
     <td class="text-right clsPts">
         <span id="ParentPLMinusPts" class="ParentPLMinus clsMinusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="ParentPLMinusRs" class="ParentPLMinus clsMinusAmount"></span>
     </td>
     <td></td>
     </tr>
     <tr class="ParentCashMinus" style="display:none;">
     <td>
         <label class="btn btn-primary grid-button ParentCashMinus" style="cursor:text;">Cash from Parent</label>
     </td>
     <td class="text-right clsPts">
         <span id="ParentCashMinusPts" class="ParentCashMinus clsMinusAmount"></span>
     </td>
     <td class="text-right clsRs hide">
         <span id="ParentCashMinusRs" class="ParentCashMinus clsMinusAmount"></span>
     </td>
     <td></td>
     </tr>
     </script>
     
     <script type="text/x-jquery-tmpl" id="tmplExportHeader">
     <table class="table table-hover table-striped table-bordered table-UserList" id="tblExport">
     <thead>
         <tr>
             <td class="nosort border-bottom-success"></td>
             <td class="nosort border-bottom-success">User Type</td>
             <td class="nosort border-bottom-success">UserName</td>
             <td class="text-right nosort border-bottom-success">Balance</td>
             <td class="text-center nosort border-bottom-success">&nbsp;&nbsp;&nbsp;&nbsp;</td>
             <td class="nosort border-bottom-success">User Type</td>
             <td class="nosort border-bottom-success">UserName</td>
             <td class="text-right nosort border-bottom-success">Balance</td>
         </tr>
     </thead>
     <tbody>
     </tbody>
     </table>
     
     </script>
     
     <!-- Modal -->
     
     <div class="modal fade" id="ChipSettlmentModal" role="dialog" tabindex="-1" aria-hidden="true">
     <div class="modal-dialog modal-md" style="max-width:400px;">
     <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="modal-title">
                 <label id="ChipsummaryUname"></label>
             </h4>
             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
         </div>
     
         <div class="modal-body">
             <form id="ChipsSettlmentForm">
                 <table class="table dt-responsive w-100">
                     <tbody><tr>
                         <td>
                             Profit/Loss:
                         </td>
                         <td>
                             <div class="input-group">
                                 <input id="txtCurrentBalance" class="form-control" disabled="">
                                 <span class="input-group-text hidden-sm">PTS</span>
                             </div>
                         </td>
                     </tr>
                     <tr>
                         <td>Cash:</td>
                         <td>
                             <div class="input-group">
                                 <input type="text" id="txtAmount" onkeyup="AmountChange(this,event)" ename="Settlment Amount" onkeydown="AmountChange(this,event)" class="numeric form-control" required="">
                                 <span class="input-group-text hidden-sm">PTS</span>
                             </div>
                         </td>
                     </tr>
                     <tr>
                         <td></td>
                         <td>
                             <a class="cursor-pointer clsGetFullAmount badge-soft-success" onclick="getFullAmount()">Full Amount</a>
                             <a class="cursor-pointer clsClearFullAmount badge badge-soft-danger" onclick="clearFullAmount()">Clear</a>
                         </td>
                     </tr>
     
                     <tr>
                         <td>
                             Remain Cash:
                         </td>
                         <td>
                             <div class="input-group">
                                 <span id="lblNewBalance" class="form-control"></span>
                                 <span class="input-group-text hidden-sm">PTS</span>
                             </div>
                         </td>
                     </tr>
                     <tr>
                         <td>Remarks:</td>
                         <td><textarea id="txtRemarkBSSetellement" class="form-control"></textarea></td>
                     </tr>
                     <tr>
                         <td><label class="col-form-label">Password :</label></td>
                         <td>
                             <div class="input-group input-group-merge">
                                 <input class="form-control" name="txtSettlementPassword" id="txtSettlementPassword" placeholder="password" type="password">
                                 <div class="input-group-append" data-password="false" onclick="HideShowPassword()">
                                     <div class="input-group-text">
                                         <span class="password-eye"></span>
                                     </div>
                                 </div>
                             </div>
                         </td>
                     </tr>
                     <tr align="right">
                         <td colspan="2">
                             <input id="btnSettlement" type="submit" value="Cash Settlement" class="btn btn-primary">
                         </td>
                     </tr>
                 </tbody></table>
                 <input id="hdnUserID" type="hidden" name="hdnUserID" value="">
                 <input id="hdnRefID" type="hidden" name="hdnRefID">
                 <input id="hdnRefType" type="hidden" name="hdnRefType">
                 <input id="hdnIsReverse" type="hidden" name="hdnIsReverse">
             </form>
         </div>
     </div>
     </div>
     </div>
     </div>
     <script>
     $(document).ready(function () {
     LoadView("dashboard");
     });
     </script>
     
     
                 <!-- end page title -->
             </div> <!-- container -->
         </div> <!-- content -->
     </div>`;
  document.querySelector(".nav2-content").style.display = "none";
  pp -= 1;
}

function openmarket() {
  document.querySelector(
    ".total"
  ).innerHTML = `<div class="content-page" style="background-size: 0px;  margin-left:0;margin-top:0;">
         <div class="content">
             <!-- Start Content-->
             <div class="container-fluid">
                 <div class="Loading" style="display: none;">
                     <button class="btn" type="button" disabled="">
                         <span class="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                         Loading...
                     </button>
                 </div>
                 <div class="page-loading" style="display:none">
                     <!--<div class="card">
                         <div class="card-body text-center">
                             <div class="spinner-grow text-primary m-2" role="status"></div>
                             <div class="spinner-grow text-secondary m-2" role="status"></div>
                             <div class="spinner-grow text-success m-2" role="status"></div>
                             <div class="spinner-grow text-danger m-2" role="status"></div>
                             <div class="spinner-grow text-warning m-2" role="status"></div>
                             <div class="spinner-grow text-info m-2" role="status"></div>
                             <div class="spinner-grow text-dark m-2" role="status"></div>
                             <div class="spinner-grow text-blue m-2" role="status"></div>
                             <div class="spinner-grow text-pink m-2" role="status"></div>
                         </div>-->
                     <!--end card-body-->
                     <!--</div>--><!--end card-->
                 </div>
                 <div class="divNews pt-1 d-lg-none d-sm-block">
                     <marquee behavior="scroll" direction="left" id="news" onmouseover="this.stop();" onmouseout="this.start();" class="vertical-align-middle">
                         <div id="NewsDisplayBody"><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Jo bhi client 5-10 sec me Lay/Back karega uski bets delete ki jaayegi aur valid nhi maani jaayegi. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Our Centre Server facing malware attack So for now all system down. We setup new server once it will complete we inform you. It will setup in minimum 4 hours. Sorry for Inconvenience. &nbsp;&nbsp;&nbsp;&nbsp;         </div><div style="display:inline" class="">             <i class=" dripicons-blog" style="vertical-align: middle;display: inline;font-size: 16px;" ng-cloak=""></i>&nbsp;Dear Clients, Due to server issue site bnd hone ki vjah se all client ki bets cancel ki gyi he chahe woh loss me tha chahe woh profit me tha so please support with us. Sorry for Inconvenience.  &nbsp;&nbsp;&nbsp;&nbsp;         </div></div>
                     </marquee>
                 </div>
                 <!-- start page title -->
                 
     <div id="pageData"><script>
     $(document).ready(function () {
     document.title = 'Open Markets';
     });
     </script>
     
     <style>
     .marketrate {
     width: 52px;
     display: inline-block;
     font-size: 14px;
     padding: 0px 5px;
     }
     
     .marketrateinput {
     margin: 5px 0px;
     }
     
     .notefont {
     font-size: 9px;
     font-weight: 800;
     }
     </style>
     <div class="row">
     <div class="col-12">
     <div class="page-title-box">
         <h4 class="page-title">Open Markets</h4>
     </div>
     </div>
     </div>
     <!-- end page title -->
     
     <div class="row">
     <div class="col-12">
     <div class="card">
         <div class="row">
             <div class=" col-sm-3 col-xs-12">
                 <input type="hidden" name="hdnMarketId" id="hdnMarketId" value="">
                 <button onclick="BlockUnblockAll(true)" class="btn btn-success waves-effect waves-light">Unblock Market</button>
                 <button onclick="BlockUnblockAll(false)" class="btn btn-danger waves-effect waves-light">Block Market</button>
             </div>
     
             <div class=" col-sm-2 col-xs-12">
                 <div class="input-group input-group-merge">
                     <input type="text" id="txtSavePassword" class="form-control" placeholder="Enter Password">
                 </div>
             </div>
             <div class="col-sm-3 col-xs-12 accordion custom-accordion">
                 <h5 class="m-0 position-relative">
                     <a class="custom-accordion-title text-reset collapsed d-block text-right mr-3" data-toggle="collapse" href="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">
                         <span>Advance Search</span> <i class="mdi mdi-chevron-down accordion-arrow"></i>
                     </a>
                 </h5>
             </div><!-- end col-->
         </div>
     
         <div id="collapseFilter" class="collapse">
             <hr>
             <div class="row">
                 <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                     <select id="ddlSport" class="form-control filteroption" data-style="btn-danger"><option value="0">Select Sport</option><option value="6534664F382F31746C56413D">Politics</option><option value="656A6973414C6B4C5551633D">Soccer</option><option value="366A716D53314D7A376A493D">Cricket</option><option value="7A59686D784545443476733D">Tennis</option></select>
                 </div>
                 <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                     <select id="ddlTournament" class="form-control filteroption">
                         <option value="0">Select Tournament</option>
                     </select>
                 </div>
                 <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                     <select id="ddlMatch" class="form-control filteroption">
                         <option value="0">Select Match</option>
                     </select>
                 </div>
                 <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                     <select id="ddlMarket" class="form-control filteroption">
                         <option value="0">Select Market</option>
                     </select>
                 </div>
                 <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                     <select id="ddlMarketType" class="form-control"><option value="-1">Select Market Type</option><option value="727A6B43615364784D50413D">Market</option><option value="656A6973414C6B4C5551633D">AdvanceSession</option><option value="4D4E3764617254514747493D">Bookmakers</option><option value="74436251495938684D59513D">LineMarket</option><option value="6E6663526A596E625754633D">ManualOdds</option><option value="7473545A6F6643505053673D">VirtualSportBook</option><option value="58434B6F393251624551383D">SportBook</option></select>
                 </div>
             </div>
             <hr>
             <div class="row">
                 <div class="col-lg-5 col-md-8 col-sm-12 col-xs-12">
                     <div class="notification-list">
                         <label class="checkbox checkbox-info ml-1 mr-1">
                             <input type="checkbox" id="chkIsDate" value="true">
                             <label for="chkIsDate" class="bold">Date Wise</label>
                         </label>
                     </div>
                     <div class="input-group marginb5 div-datepicker">
                         <input type="text" class="form-control datepicker flatpickr-input" name="ReportStartDate" id="StartDateFilter" disabled="" readonly="readonly">
                         <span class="col-form-label">to</span>
                         <input type="text" class="form-control datepicker flatpickr-input" name="ReportEndDate" id="EndDateFilter" disabled="" readonly="readonly">
                     </div>
                 </div>
                 <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                     <label class=" d-none d-md-block d-lg-block">&nbsp;</label>
                     <button type="button" class="btn btn-success" onclick="getMarket();" id="btnSearch">
                         <i class="fa fa-search"></i>  Search
                     </button>
                     <button onclick="ResetMarketAction()" class="btn btn-primary waves-effect waves-light ml-2">Reset</button>
                 </div>
             </div>
         </div>
     
     </div>
     <div class="card">
         <div class="card-body">
             <div class="col-12">
                 <div class="row d-flex flex-row-reverse">
                     <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12  mb-1">
                         <input type="text" id="txtsearch" class="form-control" placeholder="Search Min. 2 characters">
                     </div>
                     <div class="dt-buttons flex-wrap ol-lg-3 col-md-3 col-sm-12 col-xs-12 text-right">
                         <a class="btn btn-secondary buttons-html5 btn-light mr-1" tabindex="0" onclick="SearchCommonFilterDynamicData()" title="Advance Filter" style="display: inline-block;"><span><i class="fa fa-filter"></i></span></a>
                         <a class="btn btn-secondary buttons-html5 btn-light mr-1" tabindex="0" onclick="ResetDynamicData()" title="Reset" style="display: inline-block;"><i class="fas fa-sync-alt"></i></a>
                         <a class="btn btn-secondary buttons-html5 btn-light mr-1" tabindex="0" onclick="ExportTableData('CSV')" title="CSV" style="display: inline-block;"><span><i class=" fas fa-file-csv"></i></span></a>
                         <a class="btn btn-secondary buttons-html5 btn-light mr-1" tabindex="0" aria-controls="tbllist" onclick="ExportTableData('Excel')" title="Excel" style="display: inline-block;"><span><i class="far fa-file-excel"></i></span></a>
                         <a class="btn btn-secondary buttons-html5 btn-light mr-1" tabindex="0" aria-controls="tbllist" onclick="ExportTableData('PDF')" title="PDF" style="display: inline-block;"><span><i class="far fa-file-pdf"></i></span></a>
                     </div>
                     <div class="col-md-7 col-sm-12">
                         <div class="col-12 mt-2 font-weight-600">Showing&nbsp;<span id="lblselctedrecords">25</span>&nbsp;of&nbsp;<span id="lbltotalrecords">341</span>&nbsp;entries</div>
                     </div>
                 </div>
             </div>
             <div class="col-12 commonsearchquery pt-1 pb-1 mb-1 hide" id="commonsearchquery"></div>
             <div id="divList" class="table-responsive"><table id="tbllist" class="datatable table dt-responsive nowrap w-100 table-hover">         <thead>             <tr>                 <th class="nosort no-export width-10">                     <div class="custom-control custom-checkbox">                         <input type="checkbox" class="custom-control-input" id="MainCheckbox" onclick="getallcheck(this, 'tbllist');">                         <label class="custom-control-label" for="MainCheckbox"></label>                     </div>                 </th>                 <th class="no-export"></th>                 <th onclick="sortDataTable('appDate', this);" dataorder="asc" class="sorting min-width-80" filter-field="appDateFilter" filter-type="date">Date</th>                 <th onclick="sortDataTable('appFancyType', this);" dataorder="asc" class="sorting text-center min-width-130">Market Type</th>                 <th onclick="sortDataTable('appBetName', this);" dataorder="asc" class="sorting min-width-130" filter-field="appBetName" filter-type="text">Market Name</th>                 <th class="nosort text-center">Status</th>                 <th class="nosort text-center no-export">Allow<br>Market</th>                 <th class="nosort text-center no-export">Allow<br>Unmatch</th>                 <th class="nosort text-center no-export">Active</th>                 <th class="nosort text-center no-export">Is<br>Video</th>                 <th class="nosort text-center no-export">Action</th>                 <th class="nosort text-center no-export">In<br>Play</th>             </tr>         </thead>         <tbody id="tblListBody"><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043501" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043501"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043501" onclick="BlockMarket('1043501')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / One Day Internationals / Australia v West Indies / FALL OF 3RD WKT WI</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">BallStart</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_677338464C626B4A77616B3D" class="isBetAllow_677338464C626B4A77616B3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_677338464C626B4A77616B3D" class="isActive_677338464C626B4A77616B3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_70374344507037736B54453D" class="isShowLive_70374344507037736B54453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('677338464C626B4A77616B3D','Cricket / One Day Internationals / Australia v West Indies / FALL OF 3RD WKT WI')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043500" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043500"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043500" onclick="BlockMarket('1043500')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / One Day Internationals / Australia v West Indies / 3RD WKT PSHIP BOUNDARIES WI</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">BallStart</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_31664C39684A734C7233633D" class="isBetAllow_31664C39684A734C7233633D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_31664C39684A734C7233633D" class="isActive_31664C39684A734C7233633D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_70374344507037736B54453D" class="isShowLive_70374344507037736B54453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('31664C39684A734C7233633D','Cricket / One Day Internationals / Australia v West Indies / 3RD WKT PSHIP BOUNDARIES WI')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043499" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043499"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043499" onclick="BlockMarket('1043499')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / One Day Internationals / Australia v West Indies / S HOPE BOUNDARIES</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">BallStart</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_79382F4D53685057384B553D" class="isBetAllow_79382F4D53685057384B553D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_79382F4D53685057384B553D" class="isActive_79382F4D53685057384B553D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_70374344507037736B54453D" class="isShowLive_70374344507037736B54453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('79382F4D53685057384B553D','Cricket / One Day Internationals / Australia v West Indies / S HOPE BOUNDARIES')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043498" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043498"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043498" onclick="BlockMarket('1043498')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / One Day Internationals / Australia v West Indies / S HOPE RUNS</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">BallStart</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_56696876793172746537773D" class="isBetAllow_56696876793172746537773D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_56696876793172746537773D" class="isActive_56696876793172746537773D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_70374344507037736B54453D" class="isShowLive_70374344507037736B54453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('56696876793172746537773D','Cricket / One Day Internationals / Australia v West Indies / S HOPE RUNS')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043497" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043497"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043497" onclick="BlockMarket('1043497')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T10:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / Test Matches / Sri Lanka v Afghanistan / 25 OVER RUN AFG 2</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">Open</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_30414A7A74414B425A384D3D" class="isBetAllow_30414A7A74414B425A384D3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_30414A7A74414B425A384D3D" class="isActive_30414A7A74414B425A384D3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_335962784B365137564E593D" class="isShowLive_335962784B365137564E593D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('30414A7A74414B425A384D3D','Cricket / Test Matches / Sri Lanka v Afghanistan / 25 OVER RUN AFG 2')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043496" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043496"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043496" onclick="BlockMarket('1043496')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:25:19</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Hyderabad v Punjab (1188) / Total Match Boundaries</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">Open</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_4D4D2F74624552486972553D" class="isBetAllow_4D4D2F74624552486972553D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_4D4D2F74624552486972553D" class="isActive_4D4D2F74624552486972553D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_54767867544C416A4B4A673D" class="isShowLive_54767867544C416A4B4A673D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('4D4D2F74624552486972553D','Cricket / Super Over (E-Cricket) / Hyderabad v Punjab (1188) / Total Match Boundaries')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043495" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043495"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043495" onclick="BlockMarket('1043495')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:25:19</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Hyderabad v Punjab (1188) / Total Match Runs Over/Under  25.5</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">Open</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_75426A3235314E645A72493D" class="isBetAllow_75426A3235314E645A72493D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_75426A3235314E645A72493D" class="isActive_75426A3235314E645A72493D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_54767867544C416A4B4A673D" class="isShowLive_54767867544C416A4B4A673D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('75426A3235314E645A72493D','Cricket / Super Over (E-Cricket) / Hyderabad v Punjab (1188) / Total Match Runs Over/Under  25.5')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043494" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043494"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043494" onclick="BlockMarket('1043494')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:25:19</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Hyderabad v Punjab (1188) / Match Result</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">Open</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_594A51775033665871356F3D" class="isBetAllow_594A51775033665871356F3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_594A51775033665871356F3D" class="isActive_594A51775033665871356F3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_54767867544C416A4B4A673D" class="isShowLive_54767867544C416A4B4A673D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('594A51775033665871356F3D','Cricket / Super Over (E-Cricket) / Hyderabad v Punjab (1188) / Match Result')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043493" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043493"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043493" onclick="BlockMarket('1043493')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:23:19</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Rajasthan v Lucknow (1187) / Total Match Boundaries</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">Open</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_68386852626D49313537733D" class="isBetAllow_68386852626D49313537733D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_68386852626D49313537733D" class="isActive_68386852626D49313537733D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_68393569746732545842733D" class="isShowLive_68393569746732545842733D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('68386852626D49313537733D','Cricket / Super Over (E-Cricket) / Rajasthan v Lucknow (1187) / Total Match Boundaries')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043492" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043492"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043492" onclick="BlockMarket('1043492')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:23:19</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Rajasthan v Lucknow (1187) / Total Match Runs Over/Under  25.5</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">Open</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_735668465255716D5179513D" class="isBetAllow_735668465255716D5179513D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_735668465255716D5179513D" class="isActive_735668465255716D5179513D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_68393569746732545842733D" class="isShowLive_68393569746732545842733D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('735668465255716D5179513D','Cricket / Super Over (E-Cricket) / Rajasthan v Lucknow (1187) / Total Match Runs Over/Under  25.5')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043491" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043491"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043491" onclick="BlockMarket('1043491')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:23:19</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Rajasthan v Lucknow (1187) / Match Result</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">Open</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_45376849666F39444646633D" class="isBetAllow_45376849666F39444646633D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_45376849666F39444646633D" class="isActive_45376849666F39444646633D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_68393569746732545842733D" class="isShowLive_68393569746732545842733D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('45376849666F39444646633D','Cricket / Super Over (E-Cricket) / Rajasthan v Lucknow (1187) / Match Result')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043490" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043490"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043490" onclick="BlockMarket('1043490')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / One Day Internationals / Australia v West Indies / FALL OF 2ND WKT WI</td>         <td class="text-center">                          <span class="btn btn-info grid-button" style="cursor:text;">Closed</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_763845737A74506B6C64453D" class="isBetAllow_763845737A74506B6C64453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_763845737A74506B6C64453D" class="isActive_763845737A74506B6C64453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_70374344507037736B54453D" class="isShowLive_70374344507037736B54453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('763845737A74506B6C64453D','Cricket / One Day Internationals / Australia v West Indies / FALL OF 2ND WKT WI')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043489" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043489"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043489" onclick="BlockMarket('1043489')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / One Day Internationals / Australia v West Indies / 5 OVER RUN WI</td>         <td class="text-center">                          <span class="btn btn-danger grid-button" style="cursor:text;">InActive</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_44622F616C645450524C733D" class="isBetAllow_44622F616C645450524C733D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_44622F616C645450524C733D" class="isActive_44622F616C645450524C733D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_70374344507037736B54453D" class="isShowLive_70374344507037736B54453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('44622F616C645450524C733D','Cricket / One Day Internationals / Australia v West Indies / 5 OVER RUN WI')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043488" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043488"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043488" onclick="BlockMarket('1043488')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / One Day Internationals / Australia v West Indies / ONLY 6 OVER RUN WI</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">BallStart</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_4F6C593057557170352F553D" class="isBetAllow_4F6C593057557170352F553D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_4F6C593057557170352F553D" class="isActive_4F6C593057557170352F553D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_70374344507037736B54453D" class="isShowLive_70374344507037736B54453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('4F6C593057557170352F553D','Cricket / One Day Internationals / Australia v West Indies / ONLY 6 OVER RUN WI')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043487" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043487"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043487" onclick="BlockMarket('1043487')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / One Day Internationals / Australia v West Indies / 2ND WKT PSHIP BOUNDARIES WI</td>         <td class="text-center">                          <span class="btn btn-info grid-button" style="cursor:text;">Closed</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_6D744563464172444C4B383D" class="isBetAllow_6D744563464172444C4B383D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_6D744563464172444C4B383D" class="isActive_6D744563464172444C4B383D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_70374344507037736B54453D" class="isShowLive_70374344507037736B54453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('6D744563464172444C4B383D','Cricket / One Day Internationals / Australia v West Indies / 2ND WKT PSHIP BOUNDARIES WI')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043486" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043486"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043486" onclick="BlockMarket('1043486')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:21:19</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Kolkata v Mumbai (1186) / Total Match Boundaries</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">Open</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_54745135454C3947696E593D" class="isBetAllow_54745135454C3947696E593D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_54745135454C3947696E593D" class="isActive_54745135454C3947696E593D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_34416C6137632F327432673D" class="isShowLive_34416C6137632F327432673D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('54745135454C3947696E593D','Cricket / Super Over (E-Cricket) / Kolkata v Mumbai (1186) / Total Match Boundaries')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043485" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043485"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043485" onclick="BlockMarket('1043485')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:21:19</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Kolkata v Mumbai (1186) / Total Match Runs Over/Under  25.5</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">Open</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_6D56426A617549672B754D3D" class="isBetAllow_6D56426A617549672B754D3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_6D56426A617549672B754D3D" class="isActive_6D56426A617549672B754D3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_34416C6137632F327432673D" class="isShowLive_34416C6137632F327432673D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('6D56426A617549672B754D3D','Cricket / Super Over (E-Cricket) / Kolkata v Mumbai (1186) / Total Match Runs Over/Under  25.5')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043484" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043484"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043484" onclick="BlockMarket('1043484')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:21:19</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Kolkata v Mumbai (1186) / Match Result</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">Open</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_5035666737384A497056383D" class="isBetAllow_5035666737384A497056383D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_5035666737384A497056383D" class="isActive_5035666737384A497056383D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_34416C6137632F327432673D" class="isShowLive_34416C6137632F327432673D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('5035666737384A497056383D','Cricket / Super Over (E-Cricket) / Kolkata v Mumbai (1186) / Match Result')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043483" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043483"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043483" onclick="BlockMarket('1043483')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / One Day Internationals / Australia v West Indies / K OTTLEY BOUNDARIES</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">BallStart</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_34377562736974795244303D" class="isBetAllow_34377562736974795244303D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_34377562736974795244303D" class="isActive_34377562736974795244303D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_70374344507037736B54453D" class="isShowLive_70374344507037736B54453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('34377562736974795244303D','Cricket / One Day Internationals / Australia v West Indies / K OTTLEY BOUNDARIES')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043482" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043482"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043482" onclick="BlockMarket('1043482')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / One Day Internationals / Australia v West Indies / K OTTLEY RUNS</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">Open</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_73797A6D613739694F5A633D" class="isBetAllow_73797A6D613739694F5A633D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_73797A6D613739694F5A633D" class="isActive_73797A6D613739694F5A633D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_70374344507037736B54453D" class="isShowLive_70374344507037736B54453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('73797A6D613739694F5A633D','Cricket / One Day Internationals / Australia v West Indies / K OTTLEY RUNS')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043481" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043481"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043481" onclick="BlockMarket('1043481')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:18:49</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Delhi v Gujarat (1185) / Total Match Boundaries</td>         <td class="text-center">                          <span class="btn btn-primary grid-button" style="cursor:text;">Suspended</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_675A5931472B4B357A6B6B3D" class="isBetAllow_675A5931472B4B357A6B6B3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_675A5931472B4B357A6B6B3D" class="isActive_675A5931472B4B357A6B6B3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_696F796C5834392B617A6F3D" class="isShowLive_696F796C5834392B617A6F3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('675A5931472B4B357A6B6B3D','Cricket / Super Over (E-Cricket) / Delhi v Gujarat (1185) / Total Match Boundaries')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043480" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043480"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043480" onclick="BlockMarket('1043480')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:18:49</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Delhi v Gujarat (1185) / Total Match Runs Over/Under  25.5</td>         <td class="text-center">                          <span class="btn btn-primary grid-button" style="cursor:text;">Suspended</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_7262574862366D5A7334733D" class="isBetAllow_7262574862366D5A7334733D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_7262574862366D5A7334733D" class="isActive_7262574862366D5A7334733D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_696F796C5834392B617A6F3D" class="isShowLive_696F796C5834392B617A6F3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('7262574862366D5A7334733D','Cricket / Super Over (E-Cricket) / Delhi v Gujarat (1185) / Total Match Runs Over/Under  25.5')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043479" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043479"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043479" onclick="BlockMarket('1043479')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T13:18:49</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">VirtualSportBook</span>                      </td>         <td>Cricket / Super Over (E-Cricket) / Delhi v Gujarat (1185) / Match Result</td>         <td class="text-center">                          <span class="btn btn-primary grid-button" style="cursor:text;">Suspended</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_45367A51413931784E57673D" class="isBetAllow_45367A51413931784E57673D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_45367A51413931784E57673D" class="isActive_45367A51413931784E57673D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_696F796C5834392B617A6F3D" class="isShowLive_696F796C5834392B617A6F3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('45367A51413931784E57673D','Cricket / Super Over (E-Cricket) / Delhi v Gujarat (1185) / Match Result')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043477" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043477"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043477" onclick="BlockMarket('1043477')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:00:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / One Day Internationals / Australia v West Indies / ONLY 5 OVER RUN WI</td>         <td class="text-center">                          <span class="btn btn-info grid-button" style="cursor:text;">Closed</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_744E4C78495548727477453D" class="isBetAllow_744E4C78495548727477453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_744E4C78495548727477453D" class="isActive_744E4C78495548727477453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_70374344507037736B54453D" class="isShowLive_70374344507037736B54453D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('744E4C78495548727477453D','Cricket / One Day Internationals / Australia v West Indies / ONLY 5 OVER RUN WI')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr><tr>         <td class="no-export">             <div class="custom-control custom-checkbox">                 <input type="checkbox" class="custom-control-input" id="1043476" onclick="selectcheckbox('tbllist');">                 <label class="custom-control-label" for="1043476"></label>             </div>         </td>         <td class="no-export">             <span><i class="fa fa-check-circle text-success cursor-pointer font-12 BlockUnBlockMarket_1043476" onclick="BlockMarket('1043476')" data-plugin="tippy" data-tippy-arrowtype="round" data-tippy-arrow="true" data-tippy-animation="fade" title="Active/Deactive Market"></i></span>         </td>         <td>2024-02-04T09:30:00</td>          <td class="text-center">                          <span class="btn btn-warning grid-button" style="cursor:text;">Adv. Session</span>                      </td>         <td>Cricket / Test Matches / India v England / 55 OVER RUN IND 2</td>         <td class="text-center">                          <span class="btn btn-success grid-button" style="cursor:text;">BallStart</span>                      </td>          <td class="text-center no-export">                          <button id="isBetAllow_6555487766416E554B6A6F3D" class="isBetAllow_6555487766416E554B6A6F3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Allow Market"><i class="mdi mdi-checkbox-marked-circle-outline"></i></button>                      </td>          <td class="text-center no-export">                      </td>         <td class="text-center no-export">                          <span id="isActive_6555487766416E554B6A6F3D" class="isActive_6555487766416E554B6A6F3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Is-Active"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export">                          <span id="isShowLive_4F324136362F6D7A73456B3D" class="isShowLive_4F324136362F6D7A73456B3D btn btn-outline-success waves-effect waves-light" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Show Live"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>                      </td>         <td class="text-center no-export" style="min-width:100px;">             <button type="button" class="btn btn-info grid-button" onclick="AdminViewMarketBets('6555487766416E554B6A6F3D','Cricket / Test Matches / India v England / 55 OVER RUN IND 2')" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" title="Client Bet Report">R</button>         </td>         <td class="text-center no-export">                      </td>      </tr></tbody>     </table></div>
             <div id="divLoadMore" class="load-more"><span onclick="BindDataToTable()">Load More</span></div>
         </div>
     </div>
     </div>
     </div>
     
     <script>
     var EnumBetStatusOpen = 1;
     var vEnumMarket = 0;
     var vEnumSession = 6;
     var vEnumAdvanceSession = 6;
     var vEnumLineMarket = 9;
     var vEnumBookmakers = 7;
     var vEnumManualOdds = 10;
     </script>
     
     <script src="/js/importrate.min.js?v=0.0.0.195" asp-append-version="true"></script>
     
     <script type="text/x-jquery-tmpl" id="tmpltblMarketHead">
     <table id="tbllist" class="datatable table dt-responsive nowrap w-100 table-hover">
     <thead>
         <tr>
             <th class="nosort no-export width-10" >
                 <div class="custom-control custom-checkbox">
                     <input type="checkbox" class="custom-control-input" id="MainCheckbox" onclick="getallcheck(this, 'tbllist');" />
                     <label class="custom-control-label" for="MainCheckbox"></label>
                 </div>
             </th>
             <th class="no-export"></th>
             <th onclick="sortDataTable('appDate', this);" dataorder="asc" class="sorting min-width-80" filter-field="appDateFilter" filter-type="date" >Date</th>
             <th onclick="sortDataTable('appFancyType', this);" dataorder="asc" class="sorting text-center min-width-130" >Market Type</th>
             <th onclick="sortDataTable('appBetName', this);" dataorder="asc" class="sorting min-width-130" filter-field="appBetName" filter-type="text" >Market Name</th>
             <th class="nosort text-center">Status</th>
             <th class="nosort text-center no-export">Allow<br />Market</th>
             <th class="nosort text-center no-export">Allow<br />Unmatch</th>
             <th class="nosort text-center no-export">Active</th>
             <th class="nosort text-center no-export">Is<br />Video</th>
             <th class="nosort text-center no-export">Action</th>
             <th class="nosort text-center no-export">In<br />Play</th>
         </tr>
     </thead>
     <tbody id="tblListBody">
     </tbody>
     </table>
     </script>
     
     <script type="text/x-jquery-tmpl" id="tmpltblMarket">
     
     </script>
     </div>
     <script>
     $(document).ready(function () {
     LoadView("dashboard");
     });
     </script>
     
     
                 <!-- end page title -->
             </div> <!-- container -->
         </div> <!-- content -->
     </div>`;
  document.querySelector(".nav2-content").style.display = "none";
  pp -= 1;
}

var pp = 0;
function gayab() {
  if (pp == 0) {
    document.querySelector(".nav2-content").style.display = "none";
    pp += 1;
  } else {
    document.querySelector(".nav2-content").style.display = "flex";
    pp -= 1;
  }
}