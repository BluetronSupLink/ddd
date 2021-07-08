(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{361:function(v,_,D){v.exports=D.p+"assets/img/8a859915250ffcab04675fb02fdf34f8.8a859915.jpg"},362:function(v,_,D){v.exports=D.p+"assets/img/3bb8915fd6e880d64e9029a1f8677473.3bb8915f.jpg"},451:function(v,_,D){"use strict";D.r(_);var t=D(44),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"_01-领域驱动设计-微服务设计为什么要选择-ddd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-领域驱动设计-微服务设计为什么要选择-ddd"}},[v._v("#")]),v._v(" 01 | 领域驱动设计：微服务设计为什么要选择 DDD?")]),v._v(" "),t("p",[v._v("我们知道，微服务设计过程中往往会面临边界如何划定的问题，我经常看到项目团队为微服务到底应该拆多小而争得面红耳赤。不同的人会根据自己对微服务的理解而拆分出不同的微服务，于是大家各执一词，谁也说服不了谁，都觉得自己很有道理。")]),v._v(" "),t("p",[v._v("那在实际落地过程中，我也确实见过不少项目在面临这种微服务设计困惑时，是靠拍脑袋硬完成的，上线后运维的压力就可想而知了。那是否有合适的理论或设计方法来指导微服务设计呢？当你看到这一讲的题目时，我想你已经知道答案了。")]),v._v(" "),t("p",[v._v("没错，就是 DDD。那么今天我就给你详细讲解下："),t("strong",[v._v("微服务设计为什么要选择领域驱动设计？")])]),v._v(" "),t("h2",{attrs:{id:"软件架构模式的演进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件架构模式的演进"}},[v._v("#")]),v._v(" 软件架构模式的演进")]),v._v(" "),t("p",[v._v("在进入今天的主题之前，我们先来了解下背景。")]),v._v(" "),t("p",[v._v("我们知道，这些年来随着设备和新技术的发展，软件的架构模式发生了很大的变化。软件架构模式大体来说经历了"),t("strong",[v._v("从单机、集中式到分布式微服务架构三个阶段的演进")]),v._v(" 。随着分布式技术的快速兴起，我们已经进入到了微服务架构时代。")]),v._v(" "),t("p",[t("img",{attrs:{src:D(361),alt:"img"}})]),v._v(" "),t("p",[v._v("我们先来分析一下软件架构模式演进的三个阶段。")]),v._v(" "),t("p",[t("strong",[v._v("第一阶段是单机架构：")]),v._v(" 采用面向过程的设计方法，系统包括客户端 UI 层和数据库两层，采用 C/S 架构模式，整个系统围绕数据库驱动设计和开发，并且总是从设计数据库和字段开始。")]),v._v(" "),t("p",[t("strong",[v._v("第二阶段是集中式架构：")]),v._v(" 采用面向对象的设计方法，系统包括业务接入层、业务逻辑层和数据库层，采用经典的三层架构，也有部分应用采用传统的 SOA 架构。这种架构容易使系统变得臃肿，可扩展性和弹性伸缩性差。")]),v._v(" "),t("p",[t("strong",[v._v("第三阶段是分布式微服务架构：")]),v._v(" 随着微服务架构理念的提出，集中式架构正向分布式微服务架构演进。微服务架构可以很好地实现应用之间的解耦，"),t("strong",[v._v("解决单体应用扩展性和弹性伸缩能力不足的问题")]),v._v(" 。")]),v._v(" "),t("p",[v._v("我们知道，在单机和集中式架构时代，系统分析、设计和开发往往是独立、分阶段割裂进行的。")]),v._v(" "),t("p",[v._v("比如，在系统建设过程中，我们经常会看到这样的情形：A 负责提出需求，B 负责需求分析，C 负责系统设计，D 负责代码实现，"),t("strong",[v._v("这样的流程很长，经手的人也很多，很容易导致信息丢失")]),v._v(" 。最后，就很容易导致需求、设计与代码实现的不一致，往往到了软件上线后，我们才发现很多功能并不是自己想要的，或者做出来的功能跟自己提出的需求偏差太大。")]),v._v(" "),t("p",[t("strong",[v._v("而且在单机和集中式架构这两种模式下，软件无法快速响应需求和业务的迅速变化")]),v._v(" ，最终错失发展良机。此时，分布式微服务的出现就有点恰逢其时的意思了。")]),v._v(" "),t("h2",{attrs:{id:"微服务设计和拆分的困境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务设计和拆分的困境"}},[v._v("#")]),v._v(" 微服务设计和拆分的困境")]),v._v(" "),t("p",[v._v("那进入微服务架构时代以后，微服务确实也解决了原来采用集中式架构的单体应用的很多问题，比如扩展性、弹性伸缩能力、小规模团队的敏捷开发等等。")]),v._v(" "),t("p",[v._v("但在看到这些好处的同时，微服务实践过程中也产生了不少的争论和疑惑：微服务的粒度应该多大呀？微服务到底应该如何拆分和设计呢？微服务的边界应该在哪里？")]),v._v(" "),t("p",[v._v("可以说，很久以来都没有一套系统的理论和方法可以指导微服务的拆分，包括微服务架构模式的提出者 Martin Fowler 在提出微服务架构的时候，也没有告诉我们究竟应该如何拆分微服务。")]),v._v(" "),t("p",[v._v("于是，在这段较长的时间里，就有不少人对微服务的理解产生了一些曲解。有人认为：微服务很简单，不过就是把原来一个单体包拆分为多个部署包，或者将原来的单体应用架构替换为一套支持微服务架构的技术框架，就算是微服务了。 还有人说：微服务嘛，就是要微要小，拆得越小效果越好。")]),v._v(" "),t("p",[v._v("但我想，这两年，你在技术圈中一定听说过一些项目因为前期微服务拆分过度，导致项目复杂度过高，无法上线和运维。")]),v._v(" "),t("p",[v._v("综合来看，我认为微服务拆分困境产生的根本原因就是 "),t("strong",[v._v("不知道业务或者微服务的边界到底在什么地方")]),v._v(" 。换句话说，确定了业务边界和应用边界，这个困境也就迎刃而解了。")]),v._v(" "),t("p",[v._v("那如何确定，是否有相关理论或知识体系支持呢？在回答这些问题之前，我们先来了解一下领域驱动设计与微服务的前世今生。")]),v._v(" "),t("p",[v._v("2004 年埃里克·埃文斯（Eric Evans）发表了《领域驱动设计》（Domain-Driven Design –Tackling Complexity in the Heart of Software）这本书，从此领域驱动设计（Domain Driven Design，简称 DDD）诞生。DDD 核心思想是通过领域驱动设计方法定义领域模型，从而确定业务和应用边界，保证业务模型与代码模型的一致性。")]),v._v(" "),t("p",[v._v("但 DDD 提出后在软件开发领域一直都是雷声大，雨点小！直到 Martin Fowler 提出微服务架构，DDD 才真正迎来了自己的时代。")]),v._v(" "),t("p",[v._v("有些熟悉 DDD 设计方法的软件工程师在进行微服务设计时，发现可以利用 DDD 设计方法来建立领域模型，划分领域边界，再根据这些领域边界从业务视角来划分微服务边界。而按照 DDD 方法设计出的微服务的业务和应用边界都非常合理，可以很好地实现微服务内部和外部的「高内聚、低耦合」。于是越来越多的人开始把 DDD 作为微服务设计的指导思想。")]),v._v(" "),t("p",[v._v("现在，很多大型互联网企业已经将 DDD 设计方法作为微服务的主流设计方法了。DDD 也从过去雷声大，雨点小，开始真正火爆起来。")]),v._v(" "),t("h2",{attrs:{id:"为什么-ddd-适合微服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么-ddd-适合微服务"}},[v._v("#")]),v._v(" 为什么 DDD 适合微服务？")]),v._v(" "),t("p",[v._v("众里寻他千百度。蓦然回首，那人却在灯火阑珊处。在经历了多年的迷茫和争论后，微服务终于寻到了他的心上人。")]),v._v(" "),t("p",[v._v("那 DDD 到底是何方神圣，拥有什么神器呢？")]),v._v(" "),t("p",[t("strong",[v._v("DDD 是一种处理高度复杂领域的设计思想")]),v._v(" ，它试图分离技术实现的复杂性，并围绕业务概念构建领域模型来控制业务的复杂性，以解决软件难以理解，难以演进的问题。"),t("strong",[v._v("DDD 不是架构，而是一种架构设计方法论")]),v._v(" ，它通过边界划分将复杂业务领域简单化，帮我们设计出清晰的领域和应用边界，可以很容易地实现架构演进。")]),v._v(" "),t("p",[t("strong",[v._v("DDD 包括战略设计和战术设计两部分。")])]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("战略设计主要从业务视角出发")]),v._v(" ，建立业务领域模型，划分领域边界，建立通用语言的限界上下文，限界上下文可以作为微服务设计的参考边界。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("战术设计则从技术视角出发")]),v._v(" ，侧重于领域模型的技术实现，完成软件开发和落地，包括：聚合根、实体、值对象、领域服务、应用服务和资源库等代码逻辑的设计和实现。")])])]),v._v(" "),t("p",[v._v("我们不妨来看看 DDD 是如何进行战略设计的。")]),v._v(" "),t("p",[v._v("DDD 战略设计会 "),t("strong",[v._v("建立领域模型")]),v._v(" ，"),t("strong",[v._v("领域模型可以用于指导微服务的设计和拆分")]),v._v(" 。事件风暴是建立领域模型的主要方法，它是一个从发散到收敛的过程。它通常采用用例分析、场景分析和用户旅程分析，尽可能全面不遗漏地分解业务领域，并梳理领域对象之间的关系，这是一个发散的过程。事件风暴过程会产生很多的实体、命令、事件等领域对象，我们将这些领域对象从不同的维度进行聚类，形成如聚合、限界上下文等边界，建立领域模型，这就是一个收敛的过程。")]),v._v(" "),t("p",[t("img",{attrs:{src:D(362),alt:"img"}})]),v._v(" "),t("p",[t("strong",[v._v("我们可以用三步来划定领域模型和微服务的边界。")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("第一步：在事件风暴中梳理业务过程中的用户操作、事件以及外部依赖关系等，根据这些要素梳理出领域实体等领域对象。")])]),v._v(" "),t("li",[t("p",[v._v("第二步：根据领域实体之间的业务关联性，将业务紧密相关的实体进行组合形成聚合，同时确定聚合中的聚合根、值对象和实体。在这个图里，聚合之间的边界是第一层边界，它们在同一个微服务实例中运行，这个边界是逻辑边界，所以用虚线表示。")])]),v._v(" "),t("li",[t("p",[v._v("第三步：根据业务及语义边界等因素，将一个或者多个聚合划定在一个限界上下文内，形成领域模型。在这个图里，限界上下文之间的边界是第二层边界，这一层边界可能就是未来微服务的边界，不同限界上下文内的领域逻辑被隔离在不同的微服务实例中运行，物理上相互隔离，所以是物理边界，边界之间用实线来表示。")])])]),v._v(" "),t("p",[v._v("有了这两层边界，微服务的设计就不是什么难事了。")]),v._v(" "),t("p",[v._v("在战略设计中我们建立了领域模型，划定了业务领域的边界，建立了通用语言和限界上下文，确定了领域模型中各个领域对象的关系。到这儿，业务端领域模型的设计工作基本就完成了，这个过程同时也基本确定了应用端的微服务边界。")]),v._v(" "),t("p",[v._v("在从业务模型向微服务落地的过程中，也就是从战略设计向战术设计的实施过程中，我们会将领域模型中的领域对象与代码模型中的代码对象建立映射关系，将业务架构和系统架构进行绑定。当我们去响应业务变化调整业务架构和领域模型时，系统架构也会同时发生调整，并同步建立新的映射关系。")]),v._v(" "),t("h2",{attrs:{id:"ddd-与微服务的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ddd-与微服务的关系"}},[v._v("#")]),v._v(" DDD 与微服务的关系")]),v._v(" "),t("p",[v._v("有了上面的讲解，现在我们不妨再次总结下 DDD 与微服务的关系。")]),v._v(" "),t("p",[v._v("DDD 是一种架构设计方法，微服务是一种架构风格，两者从本质上都是为了追求高响应力，而从 "),t("strong",[v._v("业务视角")]),v._v(" 去分离应用系统建设复杂度的手段。两者都强调从业务出发，其核心要义是强调根据业务发展，合理划分领域边界，持续调整现有架构，优化现有代码，以保持架构和代码的生命力，也就是我们常说的演进式架构。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("DDD 主要关注：从业务领域视角划分领域边界，构建通用语言进行高效沟通，通过业务抽象，建立领域模型，维持业务和代码的逻辑一致性。")])]),v._v(" "),t("li",[t("p",[v._v("微服务主要关注：运行时的进程间通信、容错和故障隔离，实现去中心化数据管理和去中心化服务治理，关注微服务的独立开发、测试、构建和部署。")])])]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("今天我们主要讨论了微服务设计和拆分的难题。通过 DDD 战略设计可以建立领域模型，划定领域边界，解决微服务设计过程中，边界难以划定的难题。如果你的业务焦点在领域和领域逻辑，那么你就可以选择 DDD 作为微服务的设计方法！")]),v._v(" "),t("p",[v._v("更关键的一点是，DDD 不仅可以用于微服务设计，还可以很好地应用于企业中台的设计。如果你的企业正在做中台转型，DDD 将会是一把利器，它可以帮你建立一个非常好的企业级中台业务模型。有关这点你还会在后面的文章中见到详解。")]),v._v(" "),t("p",[v._v("除此之外，DDD 战术设计对设计和开发人员的要求相对较高，实现起来相对复杂。不同企业的研发管理能力和个人开发水平可能会存在差异。尤其对于传统企业而言，在战术设计落地的过程中，可能会存在一定挑战和困难，我建议你和你的公司如果有这方面的想法，就一定要谨慎评估自己的能力，选择最合适的方法落地 DDD。")]),v._v(" "),t("p",[v._v("也不妨根据收获权衡一下，"),t("strong",[v._v("总体来说，DDD 可以给你带来以下收获：")])]),v._v(" "),t("ol",[t("li",[v._v("DDD 是一套完整而系统的设计方法，它能带给你从战略设计到战术设计的标准设计过程，使得你的设计思路能够更加清晰，设计过程更加规范。")]),v._v(" "),t("li",[v._v("DDD 善于处理与领域相关的拥有高复杂度业务的产品开发，通过它可以建立一个核心而稳定的领域模型，有利于领域知识的传递与传承。")]),v._v(" "),t("li",[v._v("DDD 强调团队与领域专家的合作，能够帮助你的团队建立一个沟通良好的氛围，构建一致的架构体系。")]),v._v(" "),t("li",[v._v("DDD 的设计思想、原则与模式有助于提高你的架构设计能力。")]),v._v(" "),t("li",[v._v("无论是在新项目中设计微服务，还是将系统从单体架构演进到微服务，都可以遵循 DDD 的架构原则。")]),v._v(" "),t("li",[v._v("DDD 不仅适用于微服务，也适用于传统的单体应用。")])]),v._v(" "),t("h2",{attrs:{id:"思考题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思考题"}},[v._v("#")]),v._v(" 思考题")]),v._v(" "),t("p",[v._v("你的公司是否在实施微服务架构，你在微服务设计过程中面临的最大问题是什么？")]),v._v(" "),t("p",[v._v("笔者也有机会实践过微服务架构，使用 SpringCloud，遇到最大的问题（抛开分布式事务等相关的技术问题不谈之外），就是业务边界的划分，不知道如何划分，到目前有 20 多个微服务实例运行着，但是他们之间有关联的挺少的。更像是将原来一个一个的单体系统放到了该体现中一样。")]),v._v(" "),t("h2",{attrs:{id:"拓展阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[v._v("#")]),v._v(" 拓展阅读")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("DDD 是针对业务的，那么到底怎么理解「业务」呢？什么属于业务，什么不属于业务呢？尤其是业务与技术、基础设施、中间件之间的关系怎么划分？换句话说，DDD 是否适合技术框架、技术平台甚至技术中台的建设呢？比如我要开发一个代码部署系统或者配置管理系统，这样的系统是否适用 DDD 呢？")]),v._v(" "),t("p",[v._v("DDD 包括战略设计和战术设计：")]),v._v(" "),t("ul",[t("li",[v._v("战略设计：主要面向业务完成领域建模")]),v._v(" "),t("li",[v._v("战术设计：是根据领域模型完成微服务设计的过程")])]),v._v(" "),t("p",[v._v("领域的概念应该包括您所说的代码部署系统或者配置管理系统，只要能在这些领域中能够提炼出领域模型就可以。")])]),v._v(" "),t("li",[t("p",[v._v("这里提到的业务人员是指？还有领域专家。套用公司场景，一个做企业服务，tob 的公司，有自己的产品。这个过程中，有客户的需求，有项目经理的梳理客户需求。有产品经理对系统的规划，有客户成功提交的使用优化。这个过程中参与人，客户，项目经理，产品经理，客户成功。人员参与，那这些人在 DDD 领域模型的角色是？")]),v._v(" "),t("p",[v._v("领域模型里面都是一些领域对象，这些领域对象是构成系统的一些业务行为。你说的这些角色不知道是不是指系统建设过程中的角色。其实 DDD 并不改变原来软件开发过程中的角色，"),t("strong",[v._v("只是工作模式发生了变化")]),v._v(" ，大家一起设计领域模型，设计微服务。领域专家是熟悉并深刻理解这个领域的人，可能是业务人员，也可能会是产品经理，甚至可能是开发人员。传统企业一般有信息和业务一说。业务人员一般是指业务部门的人员。")])]),v._v(" "),t("li",[t("p",[v._v("DDD 可以理解为：ddd 是一个事件风暴 （分类划分），进而知道组织划分（也就是中台）、系统划分（微服务）、代码划分/设计的思想方法")])])])])}),[],!1,null,null,null);_.default=r.exports}}]);