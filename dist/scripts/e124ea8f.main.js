!function(){"use strict";var a="#000";window.spendingjpIcons={Models:{},Collections:{},Views:{},Data:{},init:function(){var b=new spendingjpIcons.Collections.IconList,c=new spendingjpIcons.Collections.IconList,d=new spendingjpIcons.Views.IconList({collection:b}),e=new spendingjpIcons.Views.IconList({collection:c});_.each(spendingjpIcons.Data.Icons,function(a){var d=a.replace(/^(.+)\//,""),e=d.replace(/\.svg/,"");a.match(/extras/)?c.add({path:a,filename:d,basename:e}):b.add({path:a,filename:d,basename:e})}),setTimeout(function(){$("#icon-list").html(d.render().el),$("#extra-icon-list").html(e.render().el)},1500),$("#spectrum").spectrum({preferredFormat:"hex",showInput:!0,showPalette:!0,showSelectionPalette:!0,palette:["#830242"],localStorageKey:"spectrum.spendingjpicons",color:a,change:function(a){b.each(function(b){b.set("fillColor",a.toHexString())}),c.each(function(b){b.set("fillColor",a.toHexString())})}}),$("#flip-icons").on("click","a",function(a){a.preventDefault(),b.each(function(a){a.set("active",!a.get("active"))}),c.each(function(a){a.set("active",!a.get("active"))})});var f=$(window),g=$("body");f.scroll(function(){var a=f.scrollTop();a>10?g.addClass("fixed"):g.removeClass("fixed")})}},spendingjpIcons.Models.Icon=Backbone.Model.extend({defaults:function(){return{fillColor:a,active:!1}}}),spendingjpIcons.Collections.IconList=Backbone.Collection.extend({model:spendingjpIcons.Models.Icon}),spendingjpIcons.Views.Icon=Backbone.View.extend({className:"icon-list-item",initialize:function(){this.$el.attr("original-title",this.model.get("filename")),this.listenTo(this.model,"change:fillColor",this.refill),this.listenTo(this.model,"change:active",this.toggle)},events:{},render:function(){var a,b=35;return this.$el.empty(),a=new Raphael(this.el,b+b,b+b+5),a.circle(b,b,b).attr({fill:this.model.get("fillColor"),stroke:"none"}),a.circle(b,b,b-2).attr({fill:"none",stroke:"#eee",opacity:.8,"stroke-dasharray":"- "}),$.get(this.model.get("path"),function(c){"string"==typeof c&&(c=$(c),c=c[c.length-1]);var d,e,f="",g=c.getElementsByTagName("path");for(d=0;d<g.length;d++)f+=g[d].getAttribute("d")+" ";e=a.path(f),e.attr({fill:"white",stroke:"none"}),e.scale(b/50,b/50,0,0)}),this.$el.append('<div><a href="https://raw.github.com/spendingjp-icons/spendingjp-icons.github.com/master/'+this.model.get("path")+'" download="'+this.model.get("filename")+'" target="_blank">'+this.model.get("basename")+"</a></div>"),this},toggle:function(){this.model.get("active")===!0?(this.$el.find("svg circle").css({fill:"#fff"}),this.$el.find("svg circle").last().css({stroke:"none"}),this.$el.find("svg path").css({fill:this.model.get("fillColor"),stroke:"none"})):this.refill()},refill:function(){this.model.set("active",!1),this.$el.find("svg circle").css({fill:this.model.get("fillColor")}),this.$el.find("svg circle").last().css({stroke:"#eee"}),this.$el.find("svg path").css({fill:"#fff",stroke:"none"})}}),spendingjpIcons.Views.IconList=Backbone.View.extend({render:function(a){var b=[];return this.$el.empty(),this.collection.each(function(c){var d=new spendingjpIcons.Views.Icon({model:c});b.push(d.render(a).el)},this),this.$el.append(b),this}})}(),function(){window.spendingjpIcons.Data.Icons=["icons/EC.svg","icons/admin-culture.svg","icons/admin-order-safety.svg","icons/admin.svg","icons/africa.svg","icons/aid-developing-countries.svg","icons/aid.svg","icons/airplane.svg","icons/ambulance.svg","icons/anchor.svg","icons/asia.svg","icons/books.svg","icons/car.svg","icons/civil-defence.svg","icons/civilian-action.svg","icons/coal.svg","icons/communication.svg","icons/community.svg","icons/construction.svg","icons/courts.svg","icons/culture.svg","icons/defence-admin.svg","icons/defence-research.svg","icons/defence.svg","icons/dental.svg","icons/dollar.svg","icons/economic-aid.svg","icons/economy-tourism.svg","icons/education.svg","icons/electricity.svg","icons/energy.svg","icons/energy2.svg","icons/environment-admin.svg","icons/environment.svg","icons/euro.svg","icons/extras/c_bousai.svg","icons/extras/c_bunnka.svg","icons/extras/c_chiba-city.svg","icons/extras/c_fukushi.svg","icons/extras/c_kenkou.svg","icons/extras/c_kenkou_fukushi.svg","icons/extras/c_kosodate_shien.svg","icons/extras/c_nougyou.svg","icons/extras/c_sankaku_ikusei.svg","icons/extras/c_shigenjyunkann.svg","icons/extras/c_shyoubou.svg","icons/extras/c_syoubou_bousai.svg","icons/extras/c_syoukougyou.svg","icons/extras/c_waterdoun-watersup.svg","icons/extras/c_waterdoun.svg","icons/extras/c_watersup.svg","icons/extras/c_yougo.svg","icons/family.svg","icons/family2.svg","icons/farms.svg","icons/financial-admin.svg","icons/fire-brigade.svg","icons/fishing.svg","icons/foreign-military-aid.svg","icons/forest.svg","icons/fuel.svg","icons/garbage.svg","icons/government-uk.svg","icons/government.svg","icons/harbor.svg","icons/health.svg","icons/helping-others.svg","icons/hospital-specialized.svg","icons/hospital.svg","icons/housing.svg","icons/human-resources.svg","icons/island.svg","icons/labour.svg","icons/legislative.svg","icons/manufactoring-construction.svg","icons/media.svg","icons/medical-supplies.svg","icons/microscope.svg","icons/military.svg","icons/misc-services.svg","icons/money.svg","icons/nuclear.svg","icons/old-age.svg","icons/order-safety.svg","icons/other-medical.svg","icons/our-streets.svg","icons/petrol.svg","icons/pig.svg","icons/planning.svg","icons/police.svg","icons/police2.svg","icons/pollution.svg","icons/post-secondary.svg","icons/pound.svg","icons/pound2.svg","icons/pre-school.svg","icons/primary.svg","icons/prisons.svg","icons/public-debt.svg","icons/publicaffairs.svg","icons/railways.svg","icons/rd-order-safety.svg","icons/research.svg","icons/satellite-dish.svg","icons/schools.svg","icons/secondary-lower.svg","icons/secondary-upper.svg","icons/social-systems.svg","icons/sports.svg","icons/street-lights.svg","icons/toilet.svg","icons/traffic-watersup.svg","icons/transport.svg","icons/tree.svg","icons/unemployment.svg","icons/unknown.svg","icons/waste.svg","icons/water.svg","icons/wheelchair.svg","icons/wind.svg","icons/worldmap.svg"]}(),function(){window.spendingjpIcons.Data.Icons=["icons/EC.svg","icons/admin-culture.svg","icons/admin-order-safety.svg","icons/admin.svg","icons/africa.svg","icons/aid-developing-countries.svg","icons/aid.svg","icons/airplane.svg","icons/ambulance.svg","icons/anchor.svg","icons/asia.svg","icons/books.svg","icons/car.svg","icons/civil-defence.svg","icons/civilian-action.svg","icons/coal.svg","icons/communication.svg","icons/community.svg","icons/construction.svg","icons/courts.svg","icons/culture.svg","icons/defence-admin.svg","icons/defence-research.svg","icons/defence.svg","icons/dental.svg","icons/dollar.svg","icons/economic-aid.svg","icons/economy-tourism.svg","icons/education.svg","icons/electricity.svg","icons/energy.svg","icons/energy2.svg","icons/environment-admin.svg","icons/environment.svg","icons/euro.svg","icons/extras/c_bousai.svg","icons/extras/c_bunnka.svg","icons/extras/c_chiba-city.svg","icons/extras/c_fukushi.svg","icons/extras/c_kenkou.svg","icons/extras/c_kenkou_fukushi.svg","icons/extras/c_kosodate_shien.svg","icons/extras/c_nougyou.svg","icons/extras/c_sankaku_ikusei.svg","icons/extras/c_shigenjyunkann.svg","icons/extras/c_shyoubou.svg","icons/extras/c_syoubou_bousai.svg","icons/extras/c_syoukougyou.svg","icons/extras/c_waterdoun-watersup.svg","icons/extras/c_waterdoun.svg","icons/extras/c_watersup.svg","icons/extras/c_yougo.svg","icons/family.svg","icons/family2.svg","icons/farms.svg","icons/financial-admin.svg","icons/fire-brigade.svg","icons/fishing.svg","icons/foreign-military-aid.svg","icons/forest.svg","icons/fuel.svg","icons/garbage.svg","icons/government-uk.svg","icons/government.svg","icons/harbor.svg","icons/health.svg","icons/helping-others.svg","icons/hospital-specialized.svg","icons/hospital.svg","icons/housing.svg","icons/human-resources.svg","icons/island.svg","icons/labour.svg","icons/legislative.svg","icons/manufactoring-construction.svg","icons/media.svg","icons/medical-supplies.svg","icons/microscope.svg","icons/military.svg","icons/misc-services.svg","icons/money.svg","icons/nuclear.svg","icons/old-age.svg","icons/order-safety.svg","icons/other-medical.svg","icons/our-streets.svg","icons/petrol.svg","icons/pig.svg","icons/planning.svg","icons/police.svg","icons/police2.svg","icons/pollution.svg","icons/post-secondary.svg","icons/pound.svg","icons/pound2.svg","icons/pre-school.svg","icons/primary.svg","icons/prisons.svg","icons/public-debt.svg","icons/publicaffairs.svg","icons/railways.svg","icons/rd-order-safety.svg","icons/research.svg","icons/satellite-dish.svg","icons/schools.svg","icons/secondary-lower.svg","icons/secondary-upper.svg","icons/social-systems.svg","icons/sports.svg","icons/street-lights.svg","icons/toilet.svg","icons/traffic-watersup.svg","icons/transport.svg","icons/tree.svg","icons/unemployment.svg","icons/unknown.svg","icons/waste.svg","icons/water.svg","icons/wheelchair.svg","icons/wind.svg","icons/worldmap.svg"]}(),function(){$(document).ready(function(){spendingjpIcons.init()})}();