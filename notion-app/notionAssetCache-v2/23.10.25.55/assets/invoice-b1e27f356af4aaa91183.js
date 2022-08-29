"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[149],{8812:(e,t,i)=>{i.r(t),i.d(t,{default:()=>z});var a=i(77094),r=i.n(a),o=i(77422),n=i.n(o),s=(i(33948),i(85827),i(96486)),d=i.n(s),l=i(67294),u=i.n(l),m=i(83355),c=i(8848),g=i(3779),p=i(32056),v=i(89101),h=i(75246),f=i(97880),y=i(82990),b=i(5366),M=i(61269),T=i(33929),x=i(17256),w=i(33665),I=i(38755),N=i(1643),C=i(64442),F=i(29368),Z=i(74523),S=i(86512),P=i(28240),E=i(47966),A=i(42001),D=i(7765),W=i(23189),k=i(13490),L=i(46951);const R=(0,b.defineMessages)({personal:{id:"invoice.planType.personal",defaultMessage:"Personal"},personal_education:{id:"invoice.planType.personalEducation",defaultMessage:"Personal Education"},team:{id:"invoice.planType.team",defaultMessage:"Team"},business:{id:"invoice.planType.business",defaultMessage:"Business"},enterprise:{id:"invoice.planType.enterprise",defaultMessage:"Enterprise"},legacy:{id:"invoice.planType.legacy",defaultMessage:"Legacy"}}),O=(0,b.defineMessages)({year:{id:"invoice.intervalType.yearly",defaultMessage:"Yearly"},month:{id:"invoice.intervalType.monthly",defaultMessage:"Monthly"}});class B extends m.Z{constructor(){super(...arguments),n()(this,"spaceStore",void 0),n()(this,"performRequest",(async()=>{if("invoiceById"===this.props.route.name){const e=await M.getInvoiceData(this.environment,{type:"invoice",invoiceId:this.props.route.invoiceId});if("failed"===e.type)throw e.error;return e.data}{const e=await M.getInvoiceData(this.environment,{type:"upcoming",spaceId:this.props.route.spaceId});if("failed"===e.type)throw e.error;return e.data}})),n()(this,"renderResult",((e,t)=>{if(e)return r()("div",{style:{padding:48,textAlign:"center"}},void 0,r()("div",{style:{lineHeight:"32px"}},void 0,r()(b.FormattedMessage,{id:"invoiceErrors.invoiceNotFound.title",defaultMessage:"Invoice not found"})),r()(L.Z,{isSmall:!0},void 0,r()(b.FormattedMessage,{id:"invoiceErrors.invoiceNotFound.message",defaultMessage:"You may need to <loginlink>log in</loginlink> to view it.",values:{loginlink:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return r()(P.Z,{style:{display:"inline"},innerStyle:{textDecoration:"underline"},href:v._j.login},void 0,t)}}})));if(t){const e="invoiceById"===this.props.route.name?this.props.route.invoiceId:null;return this.renderInvoice(e,t)}})),n()(this,"renderInvoiceStatus",(e=>{const t=(0,c.Vx)();switch(e){case"paid":return r()("div",{style:{color:t.invoiceGreen,display:"flex"}},void 0,r()("div",{style:{flex:0}},void 0,g.Z.checkmark({width:20,color:"#53A83F"})),r()("div",{style:{flex:1,paddingLeft:5}},void 0,r()(b.FormattedMessage,{id:"invoice.status.paid",defaultMessage:"Paid"})));case"not_paid":return r()(b.FormattedMessage,{id:"invoice.status.not_paid",defaultMessage:"Not paid"});case"upcoming":return r()(b.FormattedMessage,{id:"invoice.status.upcoming",defaultMessage:"Upcoming - not due yet"})}})),n()(this,"renderRecurringCharge",((e,t)=>{if(!e.planAmount)return;const i=(0,x.Z)(e.start).format("l"),a=(0,x.Z)(e.end).format("l");return r()("div",{},void 0,r()("div",{},void 0,r()(k.Z,{hasMarginTop:!1,style:{fontWeight:y.Z.fontWeight.bold}},void 0,r()(b.FormattedMessage,{id:"invoice.recurringDate",defaultMessage:"{startDate} - {endDate}",description:"Explains the billing period for the recurring charge",values:{startDate:i,endDate:a}}))),r()(F.Z,{size:10}),r()("div",{style:{display:"grid",textAlign:"left",gridTemplateColumns:"2fr 1fr 1fr",paddingTop:10}},void 0,r()("div",{style:{gridColumnStart:0}},void 0,r()(k.Z,{hasMarginTop:!1},void 0,this.getRecurringChargeDescription(e.quantity,e.planInterval,e.productId))),r()("div",{style:{gridColumnStart:3,textAlign:"right"}},void 0,r()("b",{},void 0,t))))})),n()(this,"renderProratedCharge",(e=>{const{intl:t}=this.props,i=(0,c.Vx)(),a=this.renderProductName(e.previousProductId,e.previousPlanInterval),o=this.renderProductName(e.productId,e.planInterval);return r()("div",{},void 0,r()("div",{style:{display:"grid",textAlign:"left",gridTemplateColumns:"1fr 2fr 1fr",paddingTop:10}},void 0,r()("div",{style:{gridColumnStart:0}},void 0,r()(b.FormattedMessage,{id:"invoice.chargeItem.proratedCharge.switchedProducts.dateRange",defaultMessage:"{startDate} - {endDate}",description:"Part of an invoice line item describing the date range for a prorated charge. Example: '10/11/2021-10/04/2022'",values:{startDate:(0,x.Z)(e.start).format("L"),endDate:(0,x.Z)(e.end).format("L")}})),r()("div",{style:{gridColumnStart:2}},void 0,e.productId!==e.previousProductId&&r()("div",{},void 0,r()(b.FormattedMessage,{id:"invoice.chargeItem.proratedCharge.switchedProducts.new",defaultMessage:"Changed from {oldProductName} to {newProductName}",values:{newProductName:o,oldProductName:a}})),e.planInterval!==e.previousPlanInterval&&r()("div",{},void 0,"year"===e.planInterval?r()(b.FormattedMessage,{id:"invoice.chargeItem.proratedCharge.switchedBillingInterval.fromMonthlyToYearly.new",defaultMessage:"Changed from monthly billing to yearly billing"}):r()(b.FormattedMessage,{id:"invoice.chargeItem.proratedCharge.switchedBillingInterval.fromYearlyToMonthly.new",defaultMessage:"Changed from yearly billing to monthly billing"})),e.quantity!==e.previousQuantity&&r()("div",{},void 0,this.renderMemberAdditionOrRemoval(e.quantity,e.previousQuantity,o)," ",this.renderMemberChange(e.quantity,e.previousQuantity))),r()("div",{style:{gridColumnStart:3,textAlign:"right"}},void 0,r()("b",{style:{color:e.amount>0?void 0:i.invoiceGreen}},void 0,(0,p.Dx)({amount:e.amount,currency:"dollar",alwaysShowCents:!0,intl:t})))))}))}renderComponent(){const e="invoiceById"===this.props.route.name?this.props.route.invoiceId:"upcoming";return r()(D.Z,{request:e,performRequest:this.performRequest,render:this.renderResult},e)}getRecurringChargeDescription(e,t,i){const a=N.NW(i),o=T.default.formatMessage(R[a]),n=T.default.formatMessage(O[t]);return r()(b.FormattedMessage,{id:"invoice.chargeRecurringItem",defaultMessage:"{numberOfMembers, plural, one {{planType} {intervalType} x {numberOfMembers} member} other {{planType} {intervalType} x {numberOfMembers} members}}",description:"Part of invoice line item where we explain the total number of members in a workspace. Example: 'Added 2 members to Notion Enterprise Yearly'",values:{numberOfMembers:e,planType:o,intervalType:n}})}renderMemberAdditionOrRemoval(e,t,i){const a=e-t;return r()(b.FormattedMessage,a<0?{id:"invoice.chargeItem.changedNumberOfMembers.membersRemoved.new",defaultMessage:"{numberOfMembersRemoved, plural, one {{numberOfMembersRemoved} member removed from {productName}} other {{numberOfMembersRemoved} members removed from {productName}}}",description:"Part of invoice line item where we explain that members were removed from a workspace. Example: '2 members removed from Notion Enterprise Yearly'",values:{numberOfMembersRemoved:-a,productName:i}}:{id:"invoice.chargeItem.changedNumberOfMembers.membersAdded.new",defaultMessage:"{numberOfMembersAdded, plural, one {{numberOfMembersAdded} member added on {productName}} other {{numberOfMembersAdded} members added on {productName}}}",description:"Part of invoice line item where we explain that members were added to a workspace. Example: '2 members added to Notion Enterprise Yearly'",values:{numberOfMembersAdded:a,productName:i}})}renderMemberChange(e,t){return r()(b.FormattedMessage,{id:"invoice.chargeItem.changedNumberOfMembers.memberChange.new",defaultMessage:"({oldTotalMembers} → {newTotalMembers})",description:"Part of an invoice line item describing a change in workspace members. {oldTotalMembers} and {newTotalMembers} have been formatted as plurals already. Example: '(from 1 member to 11 members)'",values:{oldTotalMembers:t,newTotalMembers:this.renderMemberPlural(e)}})}renderMemberPlural(e){return r()(b.FormattedMessage,{id:"invoice.memberCount",defaultMessage:"{numberOfMembers, plural, one {{numberOfMembers} member} other {{numberOfMembers} members}}",values:{numberOfMembers:e}})}renderProductName(e,t){const i=N.NW(e);switch(i){case"personal":return r()(b.FormattedMessage,{id:"invoice.productName.personal",defaultMessage:"{billingInterval, select, month {Notion Personal Monthly} year {Notion Personal Yearly} other {Notion Personal}}",description:"The name of the Personal product that we'll use on the invoice. Example usage in line item: 'Notion Personal (at $10 per month) × 10 members: $100'",values:{billingInterval:t}});case"personal_education":return r()(b.FormattedMessage,{id:"invoice.productName.personalEducation",defaultMessage:"{billingInterval, select, month {Notion Personal Pro (Education) Monthly} year {Notion Personal Pro (Education) Yearly} other {Notion Personal Pro (Education)}}",description:"The name of the Personal Pro (Education) product that we'll use on the invoice. Example usage in line item: 'Notion Personal (at $10 per month) × 10 members: $100'",values:{billingInterval:t}});case"team":return r()(b.FormattedMessage,{id:"invoice.productName.team",defaultMessage:"{billingInterval, select, month {Notion Team Monthly} year {Notion Team Yearly} other {Notion Team}}",description:"The name of the Team product that we'll use on the invoice. Example usage in line item: 'Notion Team (at $10 per month) × 10 members: $100'",values:{billingInterval:t}});case"business":return r()(b.FormattedMessage,{id:"invoice.productName.business",defaultMessage:"{billingInterval, select, month {Notion Business Monthly} year {Notion Business Yearly} other {Notion Business}}",description:"The name of the Business product that we'll use on the invoice. Example usage in line item: 'Notion Business (at $16 per month) × 10 members: $160'",values:{billingInterval:t}});case"enterprise":return r()(b.FormattedMessage,{id:"invoice.productName.enterprise",defaultMessage:"{billingInterval, select, month {Notion Enterprise Monthly} year {Notion Enterprise Yearly} other {Notion Enterprise}}",description:"The name of the Enterprise product that we'll use on the invoice. Example usage in line item: 'Notion Enterprise (at $10 per month) × 10 members: $100'",values:{billingInterval:t}});case"legacy":return r()(b.FormattedMessage,{id:"invoice.productName.legacy",defaultMessage:"{billingInterval, select, month {Notion Legacy Monthly} year {Notion Legacy Yearly} other {Notion Legacy}}",description:"The name of the Legacy product that we'll use on the invoice. Example usage in line item: 'Notion Legacy (at $10 per month) × 10 members: $100'",values:{billingInterval:t}});default:f.t1(i)}}renderInvoice(e,t){this.spaceStore=this.spaceStore||new C.Z(this.environment,{table:h.bx,id:t.spaceId});const i=(0,I.getSpaceName)(this.environment,this.spaceStore),a=(0,x.Z)(t.date).format("LL"),{intl:o}=this.props;document.title=this.props.intl.formatMessage({id:"invoice.pdf.title",defaultMessage:"Notion Invoice {date}"},{date:a});const[n,s]=d().partition(t.items,(e=>e.proration)),l=[];for(const r of n){const e=l.find((e=>e[0].start===r.start));e?e.push(r):l.push([r])}const u=[];for(const r of l){let e=[];for(const t of r){const i=e.find((e=>e.amount===-t.amount));i?e=d().without(e,i):e.push(t)}const i=r.reduce(((e,t)=>e+t.amount),0);let a=e.find((e=>Math.sign(e.amount)===Math.sign(i))),o=e.find((e=>Math.sign(e.amount)!==Math.sign(i)));if(a){if(void 0===o&&(o=a,a={...o,planInterval:"month"===o.planInterval?"year":"month"}),i<0){const e=a;a=o,o=e}u.push({type:"proration",start:r[0].start,end:t.endDate,productId:a.productId,quantity:a.quantity,planAmount:a.planAmount,planInterval:a.planInterval,amount:i,previousProductId:o.productId,previousQuantity:o.quantity,previousPlanInterval:o.planInterval})}}for(const r of s)u.push({type:"recurring",start:r.start,end:r.end,productId:r.productId,quantity:r.quantity,planAmount:r.planAmount,planInterval:r.planInterval,amount:r.amount});const m=this.getRecurringChargeTotal(u.filter((e=>"recurring"===e.type)),o),g=this.getProratedChargeTotal(u.filter((e=>"proration"===e.type)),o),p=(0,c.Vx)();return r()("div",{className:"notion-invoice",style:{padding:48,fontSize:14,height:"100vh",overflow:"auto",WebkitOverflowScrolling:"touch",background:p.contentBackground,color:p.regularTextColor}},void 0,this.renderHeading(),this.renderBasicDetails(t,i,a,e),this.renderSummary({result:t,formattedDate:a,intl:o,recurringTotal:m,proratedTotal:g}),this.renderDetails({charges:u,nonProratedItems:s,recurringTotal:m,proratedTotal:g}))}renderHeading(){const e=(0,c.Vx)();return r()("div",{style:{display:"flex"}},void 0,r()("div",{style:{padding:"5px",width:"300px",display:"inline"}},void 0,r()(W.Z,{style:{fontWeight:y.Z.fontWeight.bold,fontSize:18}},void 0,g.Z.notionLogo({width:48,height:48,color:e.regularTextColor}),r()(b.FormattedMessage,{id:"invoice.title",defaultMessage:"Notion"}))),r()("div",{style:{padding:"5px",width:"300px"}},void 0,r()(L.Z,{},void 0,"Notion Labs, Inc.",r()("br",{}),"548 Market St #74567,",r()("br",{}),"San Francisco, CA 94104-5401",r()("br",{}),"United States",r()("br",{}),"team@makenotion.com"),r()(E.Z,{style:{marginTop:12},onClick:()=>window.print(),className:"notion-print-ignore"},void 0,r()(b.FormattedMessage,{id:"invoice.printOrExportButton.label",defaultMessage:"Print/export as PDF"}))))}renderBasicDetails(e,t,i,a){return u().createElement(u().Fragment,null,r()(W.Z,{style:{paddingTop:24,paddingBottom:10,fontWeight:y.Z.fontWeight.bold,fontSize:32}},void 0,r()(b.FormattedMessage,{id:"invoice.title.label",defaultMessage:"Invoice"})),r()("div",{className:"invoiceBasicDetails",style:{display:"flex"}},void 0,r()("div",{style:{width:"300px",display:"inline"}},void 0,r()(k.Z,{hasMarginTop:!1,style:{fontWeight:y.Z.fontWeight.bold,textTransform:"uppercase"}},void 0,r()(b.FormattedMessage,{id:"invoice.workspace.label",defaultMessage:"workspace"})),t&&u().createElement(u().Fragment,null,r()("b",{},void 0,t),r()("br",{})),e.customer.email,r()(k.Z,{hasMarginTop:!0,style:{fontWeight:y.Z.fontWeight.bold,textTransform:"uppercase"}},void 0,r()(b.FormattedMessage,{id:"invoice.recipient.billing.label",defaultMessage:"billed to",description:"Label for the part of the invoice where we list the invoice recipient"})),e.customer.name,e.customer.name&&r()("br",{}),e.customer.businessName,e.customer.businessName&&r()("br",{}),e.customer.addressLine1,e.customer.addressLine1&&" ",e.customer.addressLine2,(e.customer.addressLine1||e.customer.addressLine2)&&r()("br",{}),e.customer.city," ",e.customer.state," ",e.customer.zipCode,e.customer.country&&r()("br",{}),e.customer.country,e.customer.vatId&&r()("br",{}),e.customer.vatId,r()(k.Z,{hasMarginTop:!0,style:{fontWeight:y.Z.fontWeight.bold,textTransform:"uppercase"}},void 0,r()(b.FormattedMessage,{id:"invoice.payment.status.label",defaultMessage:"status"})),this.renderInvoiceStatus(e.status)),r()("div",{style:{width:"300px",display:"inline"}},void 0,r()(k.Z,{hasMarginTop:!1,style:{fontWeight:y.Z.fontWeight.bold,textTransform:"uppercase"}},void 0,r()(b.FormattedMessage,{id:"invoice.date.label",defaultMessage:"invoice date"})),i,r()(k.Z,{hasMarginTop:!0,style:{fontWeight:y.Z.fontWeight.bold,textTransform:"uppercase"}},void 0,r()(b.FormattedMessage,{id:"invoice.number.label",description:"The invoice id for the invoice the customer is looking at.",defaultMessage:"invoice number"})),a||r()(b.FormattedMessage,{id:"invoice.upcomingInvoicePlaceholder",defaultMessage:"Upcoming",description:"The placeholder for an invoice ID if we haven't started billing for the invoice yet."}),e.hostedInvoiceUrl&&u().createElement(u().Fragment,null,r()(k.Z,{hasMarginTop:!0,style:{fontWeight:y.Z.fontWeight.bold,textTransform:"uppercase"}},void 0,r()(b.FormattedMessage,{id:"invoice.paymentInfo.label",description:"Title of section where we link the stripe payment url in our invoices.",defaultMessage:"Payment"})),this.renderHostedInvoiceLink(e.hostedInvoiceUrl,e.status)))),r()(F.Z,{size:51}))}renderHostedInvoiceLink(e,t){return r()(S.Z,{style:{display:"flex",marginLeft:-6},className:"notion-print-ignore",href:e,external:!0},void 0,r()(A.Z,{icon:g.Z.info,isSmall:!0,isLightGray:!0,shouldShrink:!0},void 0,r()(b.FormattedMessage,"paid"===t?{id:"invoice.payment.info.stripeLink.downloadReceipt",description:"The Stripe link where a user can access their Stripe invoice or pay.",defaultMessage:"Click to download receipt"}:{id:"invoice.payment.info.stripeLink.pay",description:"The Stripe link where a user can access their Stripe invoice or pay.",defaultMessage:"Click to pay invoice"})))}renderTaxItem(e,t){const i=(null==e?void 0:e.amount)||0;return(0,p.Dx)({amount:i,currency:"dollar",alwaysShowCents:!0,intl:t})}renderSummary(e){const{result:t,formattedDate:i,intl:a,recurringTotal:o,proratedTotal:n}=e,s=(0,c.Vx)(),d=Math.max(0,t.total+t.startingBalance);return u().createElement(u().Fragment,null,r()(W.Z,{style:{fontWeight:y.Z.fontWeight.bold,fontSize:24}},void 0,(0,p.Dx)({amount:Math.max(0,d),currency:"dollar",intl:a})),r()("b",{},void 0,r()(b.FormattedMessage,{id:"invoice.summary.amountDue.label",defaultMessage:"Due"}),r()("b",{},void 0," ",i),r()("br",{}),r()("br",{})),r()("div",{style:{display:"grid",textAlign:"left",gridTemplateColumns:"1fr, 1fr"}},void 0,r()("div",{style:{gridColumnStart:1}},void 0,r()("b",{},void 0,r()(b.FormattedMessage,{id:"invoice.summary.recurring.charges",defaultMessage:"Recurring plan charges"}))),r()("div",{style:{textAlign:"right",gridColumnStart:2}},void 0,r()("b",{},void 0,o))),r()(k.Z,{hasMarginTop:!1},void 0,r()(b.FormattedMessage,{id:"invoice.summary.recurring.charges.explanation",defaultMessage:"Renewal charges for your Notion plan within the billing period."})),r()("div",{style:{display:"grid",textAlign:"left",gridTemplateColumns:"1fr, 1fr"}},void 0,r()("div",{style:{gridColumnStart:1}},void 0,r()("b",{},void 0,r()(b.FormattedMessage,{id:"invoice.summary.prorated.charges",defaultMessage:"Prorated charges"}))),r()("div",{style:{textAlign:"right",gridColumnStart:2}},void 0,r()("b",{style:{color:this.showInGreen(n)&&s.invoiceGreen}},void 0,n))),r()(k.Z,{hasMarginTop:!1},void 0,r()(b.FormattedMessage,{id:"invoice.summary.prorated.charges.explanation",defaultMessage:"Partial charges for changes to members and plans within the billing period."})),r()(F.Z,{size:51}),r()("div",{className:"summaryBreakdown",style:{display:"grid",textAlign:"right",gridTemplateColumns:"repeat(6, 1fr)"}},void 0,r()("div",{className:"taxTitle",style:{gridColumnStart:5}},void 0,r()(b.FormattedMessage,{id:"invoice.summary.tax",defaultMessage:"Tax"})),r()("div",{className:"taxCalculation",style:{gridColumnStart:6}},void 0,r()("b",{},void 0,this.renderTaxItem(t.tax,a))),r()("div",{className:"creditsTitle",style:{gridColumnStart:5}},void 0,r()(b.FormattedMessage,{id:"invoice.summary.credits",defaultMessage:"Credits"})),r()("div",{className:"creditsCalculation",style:{gridColumnStart:6}},void 0,r()("b",{style:{color:s.invoiceGreen}},void 0,this.getCredits(t,a))),r()("div",{className:"totalTitle",style:{gridColumnStart:5,paddingTop:15}},void 0,r()("b",{},void 0,r()(b.FormattedMessage,{id:"invoice.total.label",defaultMessage:"Total Due"}))),r()("div",{className:"totalCalculation",style:{gridColumnStart:6,paddingTop:10,paddingLeft:10}},void 0,r()(W.Z,{style:{fontWeight:y.Z.fontWeight.bold,fontSize:24}},void 0,(0,p.Dx)({amount:Math.max(0,d),currency:"dollar",intl:a})))),r()(F.Z,{size:51}))}renderDetails(e){const{charges:t,nonProratedItems:i,recurringTotal:a,proratedTotal:o}=e,n=t.filter((e=>"proration"===e.type)),s=(0,c.Vx)();return u().createElement(u().Fragment,null,r()(W.Z,{style:{paddingTop:10,paddingBottom:10,fontWeight:y.Z.fontWeight.bold,fontSize:24}},void 0,r()(b.FormattedMessage,{id:"invoice.details.label",defaultMessage:"Details"})),r()("b",{},void 0,r()(b.FormattedMessage,{id:"invoice.summary.recurring.charges",defaultMessage:"Recurring plan charges"})),r()(k.Z,{hasMarginTop:!1},void 0,r()(b.FormattedMessage,{id:"invoice.details.recurring.charges.explanation",defaultMessage:"When your subscription renews, Notion bills you for the billing period."})),r()("div",{className:"recurringDetails",style:{display:"grid",textAlign:"left",gridTemplateColumns:"1fr 2fr 1fr"}},void 0,r()("div",{style:{gridColumnStart:3,textAlign:"right"}},void 0,r()(k.Z,{hasMarginTop:!0,style:{fontWeight:y.Z.fontWeight.bold,textTransform:"uppercase"}},void 0,r()(b.FormattedMessage,{id:"invoice.details.amount",defaultMessage:"amount"})))),r()(F.Z,{size:10}),i.length>0&&d().compact(t.map((e=>{if("recurring"===e.type)return this.renderRecurringCharge(e,a)}))),0===i.length&&r()(k.Z,{hasMarginTop:!0},void 0,r()(b.FormattedMessage,{id:"invoice.details.no.recurring.charges",defaultMessage:"No recurring charges within this billing period."})),r()(F.Z,{size:51}),r()("div",{className:"recurringTotal",style:{display:"grid",textAlign:"right",gridTemplateColumns:"repeat(6, 1fr)",paddingBottom:30}},void 0,r()("div",{className:"subtotalTitle",style:{gridColumnStart:5}},void 0,r()(b.FormattedMessage,{id:"invoice.details.subtotal",defaultMessage:"Subtotal"})),r()("div",{className:"subtotalCalculation",style:{gridColumnStart:6}},void 0,r()("b",{},void 0,a))),r()("b",{},void 0,r()(b.FormattedMessage,{id:"invoice.summary.prorated.charges.credits",defaultMessage:"Prorated charges and credits"})),r()(k.Z,{hasMarginTop:!1},void 0,r()(b.FormattedMessage,{id:"invoice.details.prorated.charges.explanation",defaultMessage:"When you change plans, or add or remove workspace members, Notion credits you for your previous member count or plan, and bills you for the remaining time on your new member count or plan."})),r()(Z.Z,{title:r()(b.FormattedMessage,{id:"invoice.details.helpButton.label",defaultMessage:"Learn more about prorated charges"}),href:(0,w.UY)("guides.billingAndPayment"),analyticsFrom:"invoices"}),r()("div",{className:"proratedDetails",style:{display:"grid",textAlign:"left",gridTemplateColumns:"1fr 2fr 1fr",paddingTop:10}},void 0,r()("div",{style:{gridColumnStart:0}},void 0,r()(k.Z,{hasMarginTop:!0,style:{fontWeight:y.Z.fontWeight.bold,textTransform:"uppercase"}},void 0,r()(b.FormattedMessage,{id:"invoice.details.date",defaultMessage:"date"}))),r()("div",{style:{gridColumnStart:2}},void 0,r()(k.Z,{hasMarginTop:!0,style:{fontWeight:y.Z.fontWeight.bold,textTransform:"uppercase"}},void 0,r()(b.FormattedMessage,{id:"invoice.details.description",defaultMessage:"description"}))),r()("div",{style:{gridColumnStart:3,textAlign:"right"}},void 0,r()(k.Z,{hasMarginTop:!0,style:{fontWeight:y.Z.fontWeight.bold,textTransform:"uppercase"}},void 0,r()(b.FormattedMessage,{id:"invoice.details.amount",defaultMessage:"amount"})))),r()(F.Z,{size:10}),n.length>0&&d().compact(t.map((e=>{if("proration"===e.type)return this.renderProratedCharge(e)}))),0===n.length&&r()(k.Z,{hasMarginTop:!1},void 0,r()(b.FormattedMessage,{id:"invoice.details.no.prorated.charges",defaultMessage:"No prorated charges within this billing period."})),r()(F.Z,{size:51}),r()("div",{className:"proratedTotal",style:{display:"grid",textAlign:"right",gridTemplateColumns:"repeat(6, 1fr)",paddingBottom:20}},void 0,r()("div",{className:"subtotalTitle",style:{gridColumnStart:5}},void 0,r()(b.FormattedMessage,{id:"invoice.details.subtotal",defaultMessage:"Subtotal"})),r()("div",{className:"subtotalCalculation",style:{gridColumnStart:6}},void 0,r()("b",{style:{color:this.showInGreen(o)&&s.invoiceGreen}},void 0,o))),r()(k.Z,{hasMarginTop:!0},void 0,r()(b.FormattedMessage,{id:"invoice.details.taxLanguage.explanation",defaultMessage:"Tax will vary based on your jurisdiction. If your Company is located in the United States, tax relates to state and local sales tax. If you Company is located in Canada, tax represents Quebec sales tax (QST). If your Company is located in the European Union, United Kingdom or Russia, tax represents value-added tax (VAT). If you are located in the European Union or the United Kingdom and are not charged VAT, this invoice relates to services which are deemed to be supplied where received and under Article 196 Council Directive 2006/112/EC the customer must self-account for VAT on the reverse charge basis in their own jurisdiction."}),r()("br",{})," ",r()("br",{}),r()(b.FormattedMessage,{id:"invoice.details.taxLanguage.explanation.vat",defaultMessage:"EU VAT: EU528003828"}),r()("br",{}),r()(b.FormattedMessage,{id:"invoice.details.taxLanguage.explanation.ca",defaultMessage:"CA QST: NR00012289"}),r()("br",{}),r()(b.FormattedMessage,{id:"invoice.details.taxLanguage.explanation.ru.inn",defaultMessage:"RU INN: 9909540024"}),r()("br",{}),r()(b.FormattedMessage,{id:"invoice.details.taxLanguage.explanation.ru.kpp",defaultMessage:"RU KPP: 997789001"})))}getRecurringChargeTotal(e,t){const i=e.reduce(((e,t)=>e+t.amount),0);return(0,p.Dx)({amount:i,currency:"dollar",alwaysShowCents:!0,intl:t})}getProratedChargeTotal(e,t){const i=e.reduce(((e,t)=>e+t.amount),0);return(0,p.Dx)({amount:i,currency:"dollar",alwaysShowCents:!0,intl:t})}getCredits(e,t){var i;const a=(null===(i=e.discount)||void 0===i?void 0:i.amountOff)||0;return(0,p.Dx)({amount:a,currency:"dollar",alwaysShowCents:!0,intl:t})}showInGreen(e){if(null!=e&&e.startsWith("("))return(0,c.Vx)().invoiceGreen}}const z=(0,b.injectIntl)(B)}}]);