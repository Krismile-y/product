<template>
  <div>
<!--    <img v-if="imgFlag" class="qidongye" src="../../assets/images/qidongtu.png" alt="">-->
    <!-- #ifdef P-PLUS -->
    <div class="login-box" style="overflow: auto">
        
      <img class="loginBg" src="../../assets/images/loginBg.png" alt="">
      <van-dialog v-model="show"  get-container="login-box" style="width: 80%;height:500px;font-size: 14px;overflow: auto;    padding: 0 0px;" class="dialog-box">
       <div v-if="type == 1">
      <h1 style="position:relative;font-size: 16px;font-weight: 700;text-align: center;padding:8px 0;background-color: #CE615E;color: #fff;">服务协议
        <img style="width:20px;height: 20px;position: absolute;right:20px;top:50%;transform: translateY(-50%);" src="../../assets/images/cha.png" alt="" @click="imgHideDialog"></h1>
      <h4>&nbsp&nbsp【首部及导言】</h4>
       <h4>&nbsp&nbsp欢迎您使用trung tâm mua sắm及服务！</h4>
      <p>&nbsp&nbsp为使用trung tâm mua sắm（以下统称“本软件”）及服务（以下统称“本服务”），您应当阅读并遵守《服务协议》（以下简称“本协议”）请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制trung tâm mua sắm责任的条款、对用户权利进行限制的条款、约定争议解决方式和司法管辖的条款（如第十五条相关约定）等，以及开通或使用某项服务的单独协议。限制、免责条款或者其他涉及您重大权益的条款可能以加粗、加下划线等形式提示您重点注意。</p>
      <p>&nbsp&nbsp除非您已充分阅读、完全理解并接受本协议所有条款，否则您无权下载、安装或使用本软件和/或相关服务。您点击“同意”、“下一步”或您的下载、安装、使用、登录等行为或者您以其他任何明示或者默示方式表示接受本协议的，即视为您已阅读并同意本协议的约束。本协议即在您与trung tâm mua sắm之间产生法律效力，成为对双方均具有约束力的法律文件。</p>
     <p>&nbsp&nbsp如果您因年龄、智力等因素而不具有完全民事行为能力，请在法定监护人（以下简称“监护人”）的陪同下阅读和判断是否同意本协议。</p>
      <p>&nbsp&nbsp如果您是非中国大陆地区的用户，您订立或履行本协议以及使用本服务的行为还需要同时遵守您所属和/或所处国家或地区的法律。</p>
      <h4>&nbsp&nbsp一、【协议的范围】</h4> 
      <p>&nbsp&nbsp1.1 本协议是您与trung tâm mua sắm之间关于您下载、安装、使用、登录本软件，以及使用本服务所订立的协议。</p>
      <p>&nbsp&nbsp1.3 基于本服务，您可以使用trung tâm mua sắm提供的丰富的单项功能服务。您在使用本软件某一特定单项功能时，该服务可能会另有单独的协议、相关业务规则等（以下统称为“单独协议”），您在使用该项服务前请阅读并同意相关的单独协议；您一旦在本服务中接受或使用衍生服务，即视为您已经阅读并同意接受本协议及该单项功能的服务条款，受到本协议及该单项功能服务条款的约束。上述单项功能服务条款包括但不限于：</p>
     <h4> &nbsp&nbsp二、【关于本软件和本服务】</h4> 
     <p>&nbsp&nbsp2.1 本软件是指trung tâm mua sắm开发并按照本协议及其他协议、规则之约定，授权用户下载、安装、登录、使用的trung tâm mua sắm软件。</p>
      <p>&nbsp&nbsp2.2 您知晓并同意，trung tâm mua sắm可能会根据需要更新或调整本软件和/或本服务的内容。</p>
      <p>&nbsp&nbsp2.3 您可能可以通过电脑、手机等终端以客户端等形式使用本服务，具体以trung tâm mua sắm提供的为准。同时，trung tâm mua sắm会不断丰富您使用本服务的终端、形式等。当您使用本服务时，您应选择与您的终端、系统等相匹配的本软件版本，否则，您可能无法正常使用本服务。</p>
      <p>&nbsp&nbsp2.4 trung tâm mua sắm给予您一项个人的、不可转让及非排他性的许可，以按照本协议及其他协议、规则限定的范围和方式使用本软件。</p>
      <p>&nbsp&nbsp2.4.1 您可以为非商业目的在单一台终端设备上下载、安装、使用、登录本软件。</p>
      <p> &nbsp&nbsp2.4.2 您可以制作本软件的一个副本，仅用作备份。备份副本必须包含原软件中含有的所有著作权信息。</p>
      <p>&nbsp&nbsp2.4.3 本条及本协议其他条款未明示授权的其他一切权利仍由trung tâm mua sắm保留，您在行使这些权利时须另外取得trung tâm mua sắm的书面许可。trung tâm mua sắm如果未行使前述任何权利，并不构成对该权利的放弃。</p>
     <h4> &nbsp&nbsp三、【用户账号】</h4> <p>&nbsp&nbsp使用本软件您需要注册用户账号，并应当遵守《用户账号规则》。</p>
      <h4>&nbsp&nbsp四、【软件的获取】</h4>
      <p> &nbsp&nbsp4.1 您可以直接从trung tâm mua sắm的官方网站、官方应用分发平台以及trung tâm mua sắm授权的第三方网站、应用分发平台等trung tâm mua sắm官方或trung tâm mua sắm授权的渠道获取本软件。</p>
      <p>&nbsp&nbsp4.2 如果您从未经trung tâm mua sắm授权的第三方获取本软件或与本软件名称相同的安装程序，trung tâm mua sắm无法保证该软件能够正常使用，并对因此给您造成的损失不予负责。</p>
      <h4>&nbsp&nbsp五、【软件的安装与卸载】</h4> 
      <p>&nbsp&nbsp5.1 trung tâm mua sắm可能为不同的终端、系统等开发不同的软件版本，您应当根据实际情况选择下载合适的版本进行安装。</p>
     <p> &nbsp&nbsp5.2 下载安装程序后，您需要按照该程序提示的步骤正确安装。</p> 
     <p>&nbsp&nbsp5.3 为提供更加优质、安全的服务，在本软件安装时，trung tâm mua sắm可能推荐您安装其他软件，您可以选择安装或不安装。</p>
     <p> &nbsp&nbsp5.4 因经营策略安排或调整等原因，不同地区的用户于本软件可使用的具体服务内容可能会存在差异，具体以trung tâm mua sắm实际提供的为准。</p>
      <p>&nbsp&nbsp5.5 如果您不再需要使用本软件或者需要安装新版软件，可以自行卸载。如果您愿意帮助trung tâm mua sắm改进产品服务，请告知卸载的原因。</p>
      <h4>&nbsp&nbsp六、【软件的更新】</h4><p> &nbsp&nbsp6.1
      为了增进用户体验、完善服务内容，trung tâm mua sắm可能不断努力开发新的服务，并为您不时提供软件更新。</p>
      <p>&nbsp&nbsp6.2 为了改善用户体验或提高服务安全性、保证功能的一致性等目的，trung tâm mua sắm有权不经向您特别通知而对本软件进行更新，或者对本软件的部分功能效果、服务内容进行改变。</p>
      <p>&nbsp&nbsp6.3 本软件新版本发布后，旧版本的软件可能无法使用。trung tâm mua sắm不保证旧版本软件继续可用，也不保证继续对旧版本软件提供相应的客服和维护服务，请您随时核对并下载最新版本。</p>
      <h4>&nbsp&nbsp七、【用户个人信息保护】</h4> 
      <p>&nbsp&nbsp7.1 保护用户个人信息是trung tâm mua sắm的一项基本原则，trung tâm mua sắm将按照本协议及《trung tâm mua sắm隐私政策》的约定收集、使用、储存和分享您的个人信息。本协议对个人信息保护相关内容未作明确规定的，均以《trung tâm mua sắm隐私政策》的内容为准。
      </p>
     <p>&nbsp&nbsp 7.2 您在注册帐号或使用本服务的过程中，可能需要填写一些必要的信息。若国家法律法规（本协议中的“法律法规”指用户所属/所处地区、国家现行有效的法律、行政法规、司法解释、地方法规、地方规章、部门规章及其他规范性文件以及对于该等法律法规的不时修改和补充，以及相关政策规定等，下同。）有特殊规定的，您需要填写真实的身份信息（包括但不限于手机号等信息）。若您填写的信息不完整或不真实，则可能无法使用本服务或在使用过程中受到限制。</p>
     <p> &nbsp&nbsp7.3
      一般情况下，您可根据相关产品规则浏览、修改自己提交的信息，但出于安全性和身份识别（如号码找回等）的考虑，您可能无法修改注册时提供的初始注册信息及其他验证信息。</p>
      <p>&nbsp&nbsp7.4 trung tâm mua sắm将运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。</p>
      <p>&nbsp&nbsp7.5 trung tâm mua sắm不会将您的个人信息转移或披露给任何第三方，除非：</p>
      <p>（1）相关法律法规或司法机关、行政机关要求；</p>
      <p>（2）为完成合并、分立、收购或资产转让而转移；</p>
      <p>（3）为完成合并、分立、收购或资产转让而转移；</p>
      <p>（4）依据《trung tâm mua sắm隐私政策》或其他相关协议规则可以转移或披露给任何第三方的情形。</p>
      <h4>&nbsp&nbsp八、【用户行为规范】</h4><p> &nbsp&nbsp8.1 【用户注意事项】 您充分理解并同意：</p> 
      <p>&nbsp&nbsp8.1.1 您理解并同意：为了向您提供有效的服务，本软件会利用您终端设备的处理器和带宽等资源。本软件使用过程中可能产生数据流量的费用，用户需自行向运营商了解相关资费信息，并自行承担相关费用。</p>
      <p>&nbsp&nbsp8.1.2 您在使用本服务某一特定功能时，trung tâm mua sắm可以使用您终端设备的相关权限、接口及相关信息等以实现相应的功能。
     </p>
       <p>&nbsp&nbsp8.1.3 您可以选择不向trung tâm mua sắm提供您的某些信息，或者根据产品设置Hủy bỏtrung tâm mua sắm收集某些信息的权利，但因此可能会导致相关服务功能无法实现。</p>
     <p> &nbsp&nbsp8.1.4 trung tâm mua sắm将会尽其商业上的合理努力保障您在本服务中的数据存储安全，但是，trung tâm mua sắm并不能就此提供完全保证，包括但不限于以下情形：</p>
      <p>（1）trung tâm mua sắm不对由于非trung tâm mua sắm原因造成的您在本软件和/或本服务中相关数据的删除或储存失败负责。</p>
      <p>（2）您应自行备份存储在本软件和/或本服务中的数据、信息或与本软件和/或本服务相关的数据、信息，双方另有约定的按相应约定执行。</p>
    <p>  （3）如果您停止使用本软件和/或本服务，或因您违反法律法规或本协议而被Hủy bỏ或终止使用本服务，trung tâm mua sắm有权从服务器上永久地删除您的数据。您的服务停止、终止或Hủy bỏ后，trung tâm mua sắm没有义务向您返还任何数据。</p>
    <p>  &nbsp&nbsp8.1.5 用户在使用本软件及服务时，须自行承担如下来自trung tâm mua sắm不可掌控的风险内容，包括但不限于：</p>
      <p>（1）用户必须选择与所安装终端设备相匹配的软件版本，否则，由于软件与终端设备型号不相匹配所导致的任何问题或损害，均由用户自行承担；</p>
      <p>（2）用户在使用本软件访问第三方网站时，因第三方网站及相关内容所可能导致的风险，由用户自行承担；</p>
      <p>（3）由于无线网络信号不稳定、无线网络带宽小等原因，所引起的本软件登录失败、资料同步不完整、页面打开速度慢等风险。</p>
      <p>&nbsp&nbsp8.1.6 本软件内的运营活动均由trung tâm mua sắm或第三方举办，活动中涉及到的奖品，也均由trung tâm mua sắm或第三方自行购买，除有特别声明外，活动中提供的奖品生产商（如奖品为苹果手机的苹果公司，下同）等均未参与本软件内的运营活动。因运营活动产生纠纷的，由trung tâm mua sắm或第三方在法律规定的范围内承担责任，与奖品生产商无关。因活动奖品质量产生纠纷的,按照相关法律规定处理。</p>
     <p> &nbsp&nbsp8.1.7 您使用本服务时，本服务的内容可能会因您使用软件版本的不同而有差别。您理解当您在使用本软件的某些版本开通或进入trung tâm mua sắm开发的应用分发类产品或应用分发类功能的相关页面时，此应用分发类产品或功能为更好地向您提供与终端设备上应用相关的升级提示等服务，可能会使用或向您的好友展示您终端设备上使用应用程序的相关信息。</p>
      <p>&nbsp&nbsp8.1.8
      本服务可能会向您提供一些与地理位置、兴趣爱好等信息相关的基于非好友用户之间的交友、拓展好友的功能，您使用这些功能即表示您同意本服务获取、使用您的地理位置、兴趣爱好等信息。同时，您理解并同意：在前述相关功能中，相关信息的发布由用户自行发布，并自行确保其合法、健康、真实以及自行承担相关法律责任；您应自行通过各种手段认真核实相关用户及其发布信息的合法性、真实性，若您与其他用户涉及线下见面、约会或交友等各种实体活动的，要注意保护好自己的人身、财产安全；同时，trung tâm mua sắm在前述相关功能中，仅提供技术支持和平台服务，基于互联网虚拟的特性，trung tâm mua sắm无法核实相关用户及发布信息的真实性、合法性，也无法向您提供任何保证。若由于前述相关功能，导致您在线上、线下有任何人身、财产损失的，您同意自行承担全部责任，与trung tâm mua sắm无关也不会追究trung tâm mua sắm的任何责任。</p>
      <p>&nbsp&nbsp8.2 【用户禁止行为】
      您在使用本软件和/或本服务的过程中，应遵守相关法律法规、用户协议、规则规范等，不得从事包括但不限于以下任何行为，也不得为以下任何行为提供便利：</p>
      <p>&nbsp&nbsp8.2.1 法律法规禁止的行为
      您在使用本服务时须遵守法律法规，不得制作、复制、发布、传播含有下列内容的信息或从事相关行为，也不得为制作、复制、发布、传播含有下列内容的信息或从事相关行为提供便利：</p>
      <p>（1）反对宪法所确定的基本原则的。</p>
      <p>（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的。</p>
      <p>（3）损害国家荣誉和利益的。 </p>
      <p>（4）煽动民族仇恨、民族歧视，破坏民族团结的。</p>
      <p>（5）破坏国家宗教政策，宣扬邪教和封建迷信的。</p>
      <p>（6）散布谣言，扰乱社会秩序，破坏社会稳定的。</p>
     <p> （7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的。</p>
      <p>（8）侮辱或者诽谤他人，侵害他人合法权益的。</p>
      <p>（9）违反法律法规底线、社会主义制度底线、国家利益底线、公民合法权益底线、社会公共秩序底线、道德风尚底线和信息真实性底线的“七条底线”要求的。</p>
      <p>（10）法律法规、trung tâm mua sắm协议或规则等禁止的其他行为。</p>
       <p>&nbsp&nbsp8.2.2 软件使用除非法律法规允许或trung tâm mua sắm书面许可，您不得从事下列行为：</p>
      <p>（1）删除本软件及其副本上关于著作权的信息。</p>
      <p>（2）对本软件进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现本软件的源代码。</p>
      <p>（3）对trung tâm mua sắm拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等。</p>
      <p>（4）对本软件或者本软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，以及本软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非trung tâm mua sắm经授权的第三方工具/服务接入本软件和相关系统。</p>
      <p>（5）通过修改或伪造软件运行中的指令、数据，增加、删减、变动软件的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论这些行为是否为商业目的。</p>
      <p>（6）通过非trung tâm mua sắm开发、授权的第三方软件、插件、外挂、系统，登录或使用本软件和/或本服务，或制作、发布、传播上述工具。</p>
      <p>（7）自行、授权他人或利用第三方软件对本软件和/或本服务及其组件、模块、数据等进行干扰。</p>
      <p>（8）其他可能影响、干扰本软件和/或本服务正常运行的行为。</p> <p>&nbsp&nbsp8.3 【法律责任】</p>
      <p>&nbsp&nbsp8.3.1 您理解并同意：若您违反法律法规、本协议和/或trung tâm mua sắm其他协议、规则的，trung tâm mua sắm有权随时单方根据相应情形采取以下一项或多项措施（具体措施以及采取措施的时间长短由trung tâm mua sắm根据您的违法、违约情节相应情况确定）：</p>
      <p>&nbsp&nbsp(1) 对您进行警告。 </p><p>&nbsp&nbsp(2) 限制您使用本软件和/或本服务部分或全部功能。</p> <p>&nbsp&nbsp(3)
      删除、屏蔽相关内容或断开链接。</p> <p>&nbsp&nbsp(4) 采取其他合理、合法的措施。</p> <p>&nbsp&nbsp(5)
      依法追究您的法律责任。</p>
      <p> &nbsp&nbsp8.3.2 您导致任何第三方损害的，您应当独立承担责任；trung tâm mua sắm因此遭受损失的，您也应当一并赔偿。</p>
      <p>&nbsp&nbsp8.4 【对自己行为负责】您充分了解并同意，您必须为自己使用本软件和/或本服务的一切行为负责，包括您所发表的任何内容以及由此产生的任何后果。您应对使用本软件和/或本服务时接触到的内容自行加以判断，包括因对内容的正确性、完整性或实用性的依赖而产生的风险，并承担由此引起的相应风险。trung tâm mua sắm在法律允许的范围内不对您因前述风险而导致的任何损失或损害承担责任。</p>
      <p>&nbsp&nbsp8.5 【用户发送、传播的内容与投诉处理】</p> 
      <p>&nbsp&nbsp8.5.1  如果您发送或传播的内容违法违规或侵犯他人权利的，您同意trung tâm mua sắm有权进行独立判断并采取删除、屏蔽或断开链接等措施。</p>
      <p>&nbsp&nbsp8.5.2 如您被他人投诉或您投诉他人，trung tâm mua sắm有权将争议中相关方的主体、联系方式、投诉相关内容等必要信息提供给相关当事方或相关部门，以便及时解决投诉纠纷，保护各方合法权益。</p>
     <h4> &nbsp&nbsp九、【第三方提供的产品或服务】</h4>
     <p> &nbsp&nbsp9.1 您在trung tâm mua sắm平台上使用第三方提供的产品或服务时，除遵守本协议约定外，还应遵守第三方的用户协议。trung tâm mua sắm和第三方对可能出现的纠纷在法律规定和约定的范围内各自承担责任。</p>
      <p>&nbsp&nbsp9.2 因用户使用本软件或要求trung tâm mua sắm提供特定服务时，本软件可能会调用第三方系统或者通过第三方支持用户的使用或访问，使用或访问的结果由该第三方提供（包括但不限于您通过本服务跳转到的第三方提供的服务及内容，第三方通过trung tâm mua sắm开放平台接入的服务及内容等）。</p>
      您同意trung tâm mua sắm可以自行或由第三方通过短信、电子邮件或电子信息等多种方式向您发送、展示广告或其他信息（包括商业与非商业信息），广告或其他信息的具体发送及展示形式、频次及内容等以trung tâm mua sắm实际提供为准。
      <p>&nbsp&nbsp十、【知识产权声明】</p> 
      <p>&nbsp&nbsp10.1 trung tâm mua sắm是本软件的知识产权权利人。本软件的著作权、商标权、专利权、商业秘密等知识产权，以及与本软件相关的所有信息内容（包括但不限于文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）均受法律法规和相应的国际条约保护，trung tâm mua sắm依法享有上述相关知识产权，但相关权利人依照法律规定应享有的权利除外。</p>
      <p>&nbsp&nbsp十一、【终端安全责任】</p>
      <p> &nbsp&nbsp11.1 您理解并同意，本软件和/或本服务同大多数互联网软件、服务一样，可能会受多种因素影响（包括但不限于用户原因、网络服务质量、社会环境等）；也可能会受各种安全问题的侵扰（包括但不限于他人非法利用用户资料，进行现实中的骚扰；用户下载安装的其他软件或访问的其他网站中可能含有病毒、木马程序或其他恶意程序，威胁您终端的信息和数据的安全，继而影响本软件、本服务的正常使用等），因此，您应加强信息安全及个人信息的保护意识，注意密码保护，以免遭受损失。</p>
      <p>11.2 维护软件安全与正常使用是trung tâm mua sắm和您的共同责任，trung tâm mua sắm将按照行业标准合理审慎地采取必要技术措施保护您的终端信息和数据安全，但是您承认和同意trung tâm mua sắm不能就此提供任何保证。</p>
      <p>&nbsp&nbsp十二、【第三方软件或技术】</p> <p>&nbsp&nbsp12.1 本软件可能会使用第三方软件或技术（包括本软件可能使用的开源代码和公共领域代码等，下同），这种使用已经获得合法授权。
      </p>
      <p>&nbsp&nbsp12.2 本软件如果使用了第三方的软件或技术，trung tâm mua sắm将按照相关法规或约定，对相关的协议或其他文件，可能通过本协议附件、在本软件安装包特定文件夹中打包等形式进行展示，它们可能会以“软件使用许可协议”“授权协议”“开源代码许可证”或其他形式来表达。</p>
      <p>&nbsp&nbsp12.3 前述通过各种形式展现的相关协议或其他文件，均是本协议不可分割的组成部分，与本协议具有同等的法律效力，您应当遵守这些要求。如果您没有遵守这些要求，该第三方或者国家机关可能会对您提起诉讼、罚款或采取其他制裁措施，并要求trung tâm mua sắm给予协助，您应当自行承担法律责任。</p>
    </div>
    <div v-if="type == 2" class="text">
      <h1  style="color: #fff;position:relative;font-size: 16px;font-weight: 700;text-align: center;padding:8px 0;background-color: #CE615E;">隐私政策
        <img style="width:20px;height: 20px;position: absolute;right:20px;top:50%;transform: translateY(-50%);" src="../../assets/images/cha.png" alt="" @click="yinsiImgHideDialog"></h1></h1>
      <li class="title">隐私政策：</li>
          <p class="text_indent">&nbsp&nbsptrung tâm mua sắm尊重并保护所有使用服务用户的个人隐私权，高度重视用户的隐私及个人信息的保护，本隐私政策帮助您了解我们收集哪些数据、为什么收集这些数据，会利用这些数据做些什么及如何保护这些数据。</p>
          <p class="text_indent">&nbsp&nbsp我们将依据《中华人民共和国网络安全法》、《信息安全技术个人信息安全规范》以及其他相关法律法规、业界成熟的安全标准收集和本协议的约定使用您的个人信息，除本隐私权政策另有规定外，在未征得您事先许可的情况下，trung tâm mua sắm不会将这些信息对外披露或向第三方提供。</p>
          <ol>
              <li>
                <p>1. 收集和使用个人信息的范围。</p>
                <ol>
                  <li>
                    <p>&nbsp&nbsp注册账号：您注册并登录trung tâm mua sắm账号时至少向我们提供账号名称、头像、手机号码或电子邮箱，并创建密码。注册成功后，您提供的上述信息，将在您使用trung tâm mua sắm平台和服务期间持续授权我们使用。在您注销账号时，我们将停止使用并删除上述信息或对您的个人信息进行匿名化处理，法律法规另有规定的除外。</p>
                  </li>
                  <li>
                    <p class="font_weight">&nbsp&nbsp在您使用我们的产品/服务时，我们需要/可能需要收集和使用的您的个人信息包括如下两种：</p>
                    <ol>
                      <li>
                        <p>&nbsp&nbsp为实现向您提供我们产品及/或服务的基本功能，您须授权我们收集、使用的必要的信息。如您拒绝提供相应信息，您将无法正常使用我们的产品及/或服务；</p>
                      </li>
                       <li>
                        <p>&nbsp&nbsp为实现向您提供我们产品及/或服务的附加功能，您可选择单独同意或不同意我们收集、使用的信息。如您拒绝提供，您将无法正常使用相关附加功能或无法达到我们拟达到的功能效果，不会影响您使用我们的基本功能。</p>
                      </li>
                    </ol>
                    <p>&nbsp&nbsp我们在此特别提醒您：我们致力于打造多样的产品和服务以满足您的需求。因我们向您提供的产品和服务种类众多，且不同用户选择使用的具体产品/服务范围存在差异，故基本/附加功能及对应收集使用的个人信息类型、范围会有所区别，请以具体的产品/服务功能为准。</p>
                  </li>
                  <li>
                    <p class="font_weight">&nbsp&nbsp向您展示商品或服务信息</p>
                    <ol>
                      <li>
                        <p>&nbsp&nbsp为向您展示商品或服务信息，包括您的访问足迹、历史搜索情况，我们会收集和使用您在访问或使用淘宝平台网站或客户端时的浏览、搜索记录。我们会结合依法收集的设备信息、服务日志信息，以及其他取得您授权的信息，通过算法模型预测您的偏好特征。我们会基于您的偏好特征在trung tâm mua sắm及其他第三方应用程序向您推送您可能感兴趣的商业广告及其他信息，或者向您发送商业性短信息。我们还会基于对用户浏览、搜索商品或服务的热点、潮流与趋势的统计分析，使用排序精选类算法形成相关精选的榜单，并向您进行推荐。</p>
                      </li>
                      <li>
                        <p>&nbsp&nbsp个性化推荐与检索类算法会基于模型预测您的偏好特征，匹配您可能感兴趣的商品、服务或其他信息，对向您展示的商品、服务或其他信息进行排序。我们会根据您使用产品过程中的浏览行为，对推荐模型进行实时反馈，不断调整优化推荐结果。为满足您的多元需求，我们会在排序过程中引入多样化推荐技术，拓展推荐的内容，避免同类型内容过度集中</p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <p>2. 我们可能从第三方间接获取您的个人信息</p>
                    <p>&nbsp&nbsp从第三方间接获取您的个人信息：您使用第三方账号登录trung tâm mua sắm时，已授权trung tâm mua sắm获得您的登记、公开的信息。您在该第三方平台上登记、公布、记录的公开信息（包括昵称、头像）。</p>
                  </li>
                  <li>
                    <p>&nbsp&nbsp其他用途：当我们要将信息用于本隐私政策未载明的其他用途，将会事先征求您的同意。</p>
                    <p>&nbsp&nbsp按照法律法规要求，下列如下情况我们将无法满足您的上述请求：</p>
                    <ol>
                      <li>
                        <p>&nbsp&nbsp与国家安全、国家利益相关的；</p>
                      </li>
                      <li>
                        <p>&nbsp&nbsp与公共安全、公共利益相关的；</p>
                      </li>
                      <li>
                        <p>&nbsp&nbsp与您或者第三方重大利益相关并可能会导致严重损害的；</p>
                      </li>
                      <li>
                        <p>&nbsp&nbsp与犯罪、司法程序、政府程序等直接相关的；</p>
                      </li>
                      <li>
                        <p>&nbsp&nbsp您存在主观恶意或滥用权利的（如您的请求将危害公共安全和其他人合法权益，或您的请求超出了一般技术手段和商业成本可覆盖的范围）；</p>
                      </li>
                      <li>
                        <p>&nbsp&nbsp涉及商业秘密的;</p>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <p>3. 我们如何保护您的个人信息</p>
                <p class="text_indent">&nbsp&nbsp为防止您的信息丢失、未经您同意授权的访问、公开披露、泄露、转让等导致您个人信息的受损，trung tâm mua sắm平台将采取一切合理、可靠、可行的方案与措施，保障您的个人信息安全。</p>
                <ol>
                  <li>
                    <p>&nbsp&nbsp（1）安全措施：</p>
                    <ol>
                      <li>
                        <p>&nbsp&nbsp我们将以国家安全标准和法律法规的规定收集、使用、存储和传输用户信息，并通过用户协议和隐私政策告知您相关信息的使用目的和范围。同时，我们会对个人信息进行加密技术，以确保数据的保密性与安全性。</p>
                      </li>
                      <li>
                        <p>&nbsp&nbsp对员工信息接触者签署保密协议，定期进行安全能力与意识的培训。专岗专职，只有授权员工方可访问个人信息，若违反保密协议，将追究员工相关法律责任。</p>
                      </li>
                      <li>
                        <p>&nbsp&nbsp严格选择合作伙伴，对其进行背景调查，与有知名度且信誉良好的企业合作；与合作伙伴信息接触者签署保密协议，约定泄密的违约责任，并仅提供必要合理的信息。</p>
                      </li>
                      <li>
                        <p>&nbsp&nbsp成立安全团队，安全团队负责研发和应用安全技术和程序，以确保trung tâm mua sắm平台及个人信息的安全。我们将对安全团队负责人和信息技术负责人进行背景调查，签署保密协议，约定泄密的法律责任，并持续对其进行安全能力与意识的培训。</p>
                      </li>
                      <li>
                        <p>&nbsp&nbsp我们建立完善的信息安全管理制度和内部安全事件处置机制等。</p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <p>&nbsp&nbsp（2）保存期限</p>
                    <p class="text_indent">&nbsp&nbsp您在使用trung tâm mua sắm产品及服务期间，我们将持续为您保存您的个人信息。如果您将个人信息修改，我们会保存修改后的信息。</p>
                    <p class="text_indent">&nbsp&nbsp如果您注销帐户后，我们不会再对您的个人信息进行使用，我们将依据网络安全法等法律法规规定保存您的信息并进行匿名化处理。</p>
                  </li>
                  <li>
                    <p>&nbsp&nbsp（3）安全事件通知</p>
                    <ol>
                      <li>
                        <p>&nbsp&nbsp我们会预先制定互联网安全事件预警方案，及时处置系统漏洞、计算机病毒、网络攻击、网络侵入等安全风险，在发生危害网络安全的事件时，我们会立即启动应急预案，采取相应的补救措施，并按照规定向有关主管部门报告。</p>
                      </li>
                      <li>
                        <p>
                          &nbsp&nbsp若发生个人信息安全事件，我们将通过您预留的个人信息（包含手机号码、电子邮箱等）及时通知您，并告知您案件进展和影响，我们将联合安全团队、法务部、技术部共同采取积极有效的处理手段，采取补救措施以降低风险。同时，我们将根据有关政府部门及法律法规要求，主动上报安全事件的情况，并可能采取法律手段解决安全事件。
                        </p>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <p>&nbsp&nbsp如果决定更改隐私政策，我们会在本政策中及我们认为适当的位置发布这些更改，以便您了解我们如何收集、使用您的个人信息，哪些人可以访问这些信息，以及在什么情况下我们会透露这些信息。</p>
                  </li>
                </ol>
              </li>

              <li>
                <p>4. 您管理个人信息的权利</p>
                <p class="text_indent">&nbsp&nbsp我们非常重视您对个人信息的关注，并尽全力保护您对于自己个人信息访问、更正、删除以及撤回同意的权利，以使您拥有充分的能力保障您的隐私和安全。 您的权利包括：</p>
                <ol>
                  <li>
                    <p>（1）访问和更正您的个人信息</p>
                    <p>&nbsp&nbspA. 除法律法规规定外，您有权随时访问和更正您的个人信息，具体包括：您可通过【我】 ，访问或者修改您的邮箱信息、密码、用户名；</p>
                  </li>
                  <li>
                    <p>（2）删除您的个人信息</p>
                    <ol>
                      <li>
                        <p>&nbsp&nbsp我们在trung tâm mua sắm App 上提供以下方式删除信息。 您可通过个人中心，修改您展示的信息</p>
                      </li>
                      <li>
                        <p>&nbsp&nbsp在以下情形中，您可以向我们提出删除个人信息的请求：<br />
                          &nbsp&nbsp如果我们处理个人信息的行为违反法律法规；<br />
                          &nbsp&nbsp如果我们收集、使用您的个人信息，却未征得您的同意；<br />
                          &nbsp&nbsp如果我们处理个人信息的行为违反了与您的约定；<br />
                          &nbsp&nbsp如果您注销了trung tâm mua sắm帐号；<br />
                          &nbsp&nbsp如果我们终止服务及运营。</p>
                        <p>
                          &nbsp&nbsp以上删除请求一旦被响应，我们还将同时通知从trung tâm mua sắm获得您个人信息的第三方实体（例如使用trung tâm mua sắm帐号作为第三方登录账号的其他互联网平台），要求其及时删除，除非法律法规另有规定，或这些实体获得您的独立授权。当您从我们的服务中删除信息后，我们可能不会立即从备份系统中删除相应的信息，但会在备份更新时删除这些信息。
                        </p>
                      </li>
                    </ol>

                  </li>
                </ol>


              </li>
          </ol>
        <li class="title">5. 未成年人个人信息：</li>
        <p class="text_indent">&nbsp&nbsp若您是未成年人，建议您的监护人仔细阅读本隐私保护条例的条款，并在征得您的监护人同意的前提下使用我们的产品和服务或向我们提供信息。</p>
        <p class="text_indent">&nbsp&nbsp如您的监护人不同意您使用我们的服务或向我们提供信息，请您立即终止使用我们的服务并及时通知我们，以便我们采取相应的措施。</p>
        <p class="text_indent">&nbsp&nbsp如果监护人发现我们在未获监护人同意的情况下收集了未成年人的个人信息，请监护人反馈联系我们，我们在核准相关情况后尽快删除您的个人数据。</p>

        <li class="title font_weight">6. 法律责任与免责：</li>
        <ol>
            <li><p class="font_weight">&nbsp&nbsptrung tâm mua sắm平台对平台进行停机维护、定期检查、更新软硬件、针对突发事件、不可抗力、电脑病毒、系统故障等因素导致的正常服务中断、中止，trung tâm mua sắm不承担责任，trung tâm mua sắm平台将尽力避免服务中断并将中断时间限制在最短时间内。</p></li>
            <li><p class="font_weight">&nbsp&nbsp用户因第三方如电信部门的通讯线路故障、技术问题、网络、电脑故障、系统不稳定性及其他各种不可抗力原因而遭受的一切损失，trung tâm mua sắm不承担责任。</p></li>
            <li>
              <p class="font_weight">&nbsp&nbsp因用户违反本协议或相关的服务条款的规定，导致或产生的任何第三方向trung tâm mua sắm主张的索赔，由用户自行承担。</p>
            </li>
            <li>
              <p class="font_weight">&nbsp&nbsp用户在trung tâm mua sắm平台发表的观点及立场，并不代表trung tâm mua sắm的立场，用户应自行对发表内容负责。</p>
            </li>
            <li>
              <p class="font_weight">&nbsp&nbsp请客户自行妥善保管个人资料，将个人信息提供足够保障及备份，并采取适当的预防措施降低电脑病毒或其他恶意破坏性举动的风险。</p>
            </li>
            <li>
              <p class="font_weight">&nbsp&nbsp由于您的隐私权对本网站相当重要，除非有权机关依法调取或者第三条约定，trung tâm mua sắm平台不会无故把您的个人信息提供给无关的第三方，但不对第三人恶意侵权导致信息泄露而产生的后果负责。</p>
            </li>
        </ol>

        <li class="title">7. 知识产权：</li>
        <ol>
            <li><p>&nbsp&nbsp本软件是由trung tâm mua sắm开发。trung tâm mua sắm的一切知识产权，以及与软件相关的所有信息内容，包括但不限于：文字表述及其组合、图标、图饰、图像、图表、色彩、界面设计、版面框架、有关数据、附加程序、印刷材料或电子文档等均归trung tâm mua sắm所有，受著作权法和国际著作权条约以及其他知识产权法律法规的保护。</p></li>
            <li><p>&nbsp&nbsp未经trung tâm mua sắm书面同意，用户不得为任何营利性或非营利性的目的自行实施、利用、转让或许可任何三方实施、利用、转让上述知识产权。出现上述未经许可之行为时，trung tâm mua sắm保留追究相关责任人法律责任之权利。</p></li>
        </ol>


        <li class="title">8. 修改与解释权：</li>
        <p class="text_indent">&nbsp&nbsp根据互联网的发展和有关法律、法规及规范性文件的变化，或者因业务发展需要，trung tâm mua sắm有权对本协议的条款作出修改或变更，一旦本协议的内容发生变动，您可在trung tâm mua sắm官方网站查阅最新版协议条款，该公布行为视为trung tâm mua sắm已经通知用户修改内容，而不另行对用户进行个别通知。在trung tâm mua sắm修改协议条款后，如果您不接受修改后的条款，请立即停止使用trung tâm mua sắm提供的服务，您继续使用trung tâm mua sắm提供的服务将被视为已接受了修改后的协议。</p>

        <li class="title">9. 通知</li>
        <p class="text_indent">&nbsp&nbsp您在注册成为trung tâm mua sắm用户，并接受trung tâm mua sắm服务时，您应该trung tâm mua sắm提供真实有效的联系方式（包括您的电子邮件地址、联系电话、联系地址等），对于联系方式发生变更的，您有义务及时更新有关信息，并保持可被联系的状态。</p>
        <p class="text_indent">&nbsp&nbsptrung tâm mua sắm将向您的上述联系方式的其中之一或其中若干向您送达各类通知。平台信息发送成功后即视为送达；以纸质载体发出的书面通知，按照提供联系地址交邮后的第五个自然日即视为送达。</p>
        <li class="title">10. 法律适用、管辖与其他：</li>
        <ol>
            <li><p>&nbsp&nbsptrung tâm mua sắm郑重提醒用户注意本协议中可能存在的免除trung tâm mua sắm责任和加重用户义务的条款，请用户仔细阅读，自主考虑风险。</p></li>
            <li><p>&nbsp&nbsp本协议之订立、生效、解释、修订、补充、终止、执行与争议解决均适用中华人民共和国法律；如法律无相关规定的，参照商业惯例或行业惯例。</p></li>
            <li><p>&nbsp&nbsp与本协议、使用trung tâm mua sắm发生的任何争议或纠纷，双方应尽量友好协商解决；协商不成时，任何一方均有权将纠纷交由北京市海淀区人民法院管辖。</p></li>
            <li><p>&nbsp&nbsp本协议任一条款被视为废止、无效或不可执行，该条应视为可分的且并不影响本协议其余条款的有效性及可执行性。 </p></li>
        </ol>
        <li>10. 联系我们</li>
        <p>&nbsp&nbsp您可以通过以下方式联系我们：</p>
        <p>&nbsp&nbsp四川省成都市锦江区观音桥56号2栋1层101号（自编号325号）</p>
        <p>&nbsp&nbsp成都玄真火焰信息技术有限公司</p>
        <p>&nbsp&nbsp手机号：13129601953</p>
        <p>&nbsp&nbsp联系人： 赵静</p>
        <p>&nbsp&nbsp邮箱： zj13129601953@outlook.com</p>
    </ol>
    </div>
    </van-dialog>
      <div class="content-box">
        <div class="content">
          <div class="loginLogo">
            <img src="../../assets/images/loginLogo.png" alt="">
          </div>
<!--          <div class="logo">-->
<!--            <img src="../../assets/images/logo.png" class="login-img" />-->
<!--          </div>-->
          <div class="phone-input" style="margin-top: 100px;">
            <input type="text" placeholder="请输入手机号码" v-model="phone" />
            <img src="../../assets/images/loginUser.png" alt="">
          </div>
          <div class="phone-input">
            <input type="password" placeholder="请输入密码" v-model="password" />
            <img src="../../assets/images/loginPass.png" alt="">
          </div>
          <div class="login-privacy">
            <img style="margin-left: 10px;" src="@/assets/images/checkbox.png" v-if="!checked" alt="" srcset="" @click="handleChecked()">
            <img style="margin-left: 10px;" src="@/assets/images/checkbox2.png" v-if="checked" alt="" srcset="" @click="handleChecked()">
            <div class="login-treaty">
              <span style="color: #000;">请需同意<span class="login-treaty-link" @click="toTreaty(2)">《隐私政策》</span><span class="login-treaty-link" @click="toTreaty(1)">《服务协议》</span></span>
              <!-- <span class="login-treaty-link" @click="toTreaty(2)">《隐私协议2》</span> -->
            </div>
          </div>
          <div class="get-code"  >
            <!--active有值的时候  -->
            <button
                :class="['get-code-btn']"
                @click="sendVerifycode()"
            >
              {{ codeText }}
            </button>
          </div>
          <div class="register">
            <button class="registerBtn" style="color: #000;" @click="forgetPasswordClick">忘记密码？</button>
            <button class="registerBtn" @click="goRegisterClick">新用户注册</button>
          </div>
          <!-- <div class="login-privacy">
            <img src="@/assets/images/checkbox.png" v-if="!checksed" alt="" srcset="" @click="handleCheckeds()">
            <img src="@/assets/images/checkbox2.png" v-if="checksed" alt="" srcset="" @click="handleCheckeds()">
            <div class="login-treaty">
              <span style="color: red;">请需同意<span class="login-treaty-link" @click="toTreaty(2)">《用户政策》</span></span>
              <!-- <span class="login-treaty-link" @click="toTreaty(2)">《隐私协议2》</span> -->
            </div>
          </div> 

           <!-- <button @click="sendVerifycode"> 登录 </button> -->

          <div class="download" v-if="showDownload">
            <div class="download-btn" @click="download">下载APP</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getQueryString } from '@/libs/utils';
import { sendmsg_api } from '_api/user';
import { Notify } from 'vant';
import { Dialog } from 'vant';
import { userinfo, secrt } from '../../config/index';
import axios from '../../api/request_two';

export default {
  name: 'Login',
  components: {
    [Notify.name]: Notify,
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      // imgFlag: false,
      codeText: 'Đăng nhập',
      disabledCodeBtn: true,
      phone: '',
      password: '',
      code: '',
      id_code: '',
      time: null,
      wxCode: '',
      wxUrl: `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8a4b704eee2a0e81&redirect_uri=${encodeURIComponent(
        location.href,
      )}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`,
      qrLogin_userId: 0,
      showDownload: false,
      checked: false,
      show: false,
      type: 0,
    };
  },
  created() {
    if (!sessionStorage.getItem('token')) {
      this.$router.push('/login');
      // if (!sessionStorage.getItem('qidong')) {
      //   console.log('进来了')
      //   this.imgFlag = true
      //   sessionStorage.setItem('qidong', this.imgFlag)
      //   let timer = setTimeout(() => {
      //     this.imgFlag = false;
      //     clearTimeout(timer)
      //   }, 3000)
      // }
    } else {
      console.log('来这里了')
      this.getUserId();
      // app端不需要授权
      if (this.getIsApp()) {
        this.wxOAuth();
        this.showDownload = true;
      }
    }
  },
  methods: {
    // 点击隐私服务关闭事件
    yinsiImgHideDialog() {
      this.show = false;
    },
    // 点击服务协议关闭事件
    imgHideDialog() {
      this.show = false;
    },
    getUserId() {
      let qRUser_id = window.location.href.split('?');
      let index = qRUser_id.length;
      let user_id = qRUser_id[index - 1];
      user_id = user_id.split('=')[1];
      console.log('user_id>>>>>>>>>', user_id);
      //二维码扫码登录
      this.qrLogin_userId = user_id;
    },
    async wxOAuth() {
      let params = getQueryString();
      if (params.code) {
        this.wxCode = params.code;
      } else {
        location.href = this.wxUrl;
      }
    },
    getIsApp() {
      let ua = navigator.userAgent.toLowerCase();
      return /micromessenger/.test(ua) ? true : false;
    },
    // 登录方法
    async sendVerifycode() {
      // 判断用户是否输入用户名与密码
      if (this.phone.length === 0 || this.password.length === 0) {
        this.$toastBounce('请输入手机号码或密码')
        return
      }
      // 判断用户是否同意协议
      if (!this.checked) {
        this.$toastBounce('请阅读并同意协议!')
        return
      }
      // 都没问题，则请求登录接口
      let result = await axios.post('api/Login/login', {
        phone: this.phone,
        pass: this.password
      })
      console.log(result)
      if (result.data.code === 200) {
        this.$toastBounce('登录' + result.data.msg)
        this.$router.push('/home')
        // 存储用户信息到本地
        sessionStorage.setItem('userInfo', JSON.stringify(result.data.data))
        // 存储token到localStorage中
        sessionStorage.setItem('token', result.data.data.token)
      } else {
        this.$toastBounce(result.data.msg)
      }
    },
    // async sendVerifycode() {
    //   let reg = 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
    //   if (!this.checked) {
    //     Notify({ type: 'danger', message: '请同意协议', duration: 1000 });
    //     return;
    //   }
    //   if (!this.phone) {
    //     Notify({ type: 'danger', message: '请输入手机号码', duration: 1000 });
    //   } else if (!reg.test(this.phone)) {
    //     Notify({ type: 'danger', message: '手机格式不正确', duration: 1000 });
    //   } else {
    //     this.countDown(60);
    //     let res = await sendmsg_api({ phone: this.phone, type: 1 });
    //     if (res.code === 200) {
    //       //判断是否二维码进入  user_id
    //       if (this.qrLogin_userId !== 0) {
    //         this.$router.push({
    //           name: 'Code',
    //           query: {
    //             phone: this.phone,
    //             wxCode: this.wxCode,
    //             user_id: Number(this.qrLogin_userId),
    //           },
    //         });
    //       } else {
    //         this.$router.push({
    //           name: 'Code',
    //           query: {
    //             phone: this.phone,
    //             wxCode: this.wxCode,
    //           },
    //         });
    //       }
    //     }
    //   }
    // },
    // 倒计时方法
    countDown(time) {
      if (time === 0) {
        this.disabledCodeBtn = true;
        this.codeText = 'Nhận CAPTCHA';
        return;
      } else {
        this.disabledCodeBtn = false;
        this.codeText = 'Gửi lại(' + time + ')';
        time--;
      }
      setTimeout(() => {
        this.countDown(time);
      }, 1000);
    },
    handleChecked() {
      this.checked = !this.checked;
    },
    toTreaty(type) {
      this.type = type;
      this.show = true;
    },
    download() {
      window.location.href = 'https://api.btcexvip.top/';
    },
    // 跳转到注册页面
    goRegisterClick() {
      this.$router.push('/register')
    },
    // 忘记密码方法
    forgetPasswordClick() {
      this.$router.push('/forgetPassword')
    },
  },
};
</script>
<style lang="stylus" scoped src="./login.styl"></style>
