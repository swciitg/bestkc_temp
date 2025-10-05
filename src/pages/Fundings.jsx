import React, { useState } from "react";

const projects = [
	{
		title: "Integrating Human and Animal Health With Surveillance and Disease Ecology in a Global Urban Center",
		content: (
			<>
				<p className="text-primary-dark font-semibold">Thematic area</p>
				<p>Health and Wellness &gt; One Health</p>
				<p className="text-primary-dark font-semibold mt-2">Objectives</p>
				<ul className="list-disc ml-5">
					<li>Create a dynamic data dashboard on zoonoses</li>
					<li>Design a predictive tool to minimize outbreak risk</li>
					<li>Enable citizen and stakeholder engagement to allow participatory action</li>
					<li>Test evidence-based intervention in select wards in the city</li>
				</ul>
				<p className="text-primary-dark font-semibold mt-2">Proposed Outcomes</p>
				<ul className="list-disc ml-5">
					<li>
						<strong>Governance:</strong> To ensure that a system is in place to govern, manage, coordinate and oversee all OneHealth activities in the city of Bengaluru. Such governance will serve as a model for other cities and regions.
					</li>
					<li>
						<strong>Capacity Building:</strong> To assess and strengthen the multi-disciplinary OneHealth core capacities required to prevent, detect, and respond to zoonotic diseases and mitigate their impact.
					</li>
					<li>
						<strong>Human Disease Surveillance:</strong> To enhance citywide coordinated surveillance, preparedness and response for prevention, detection, and control of zoonotic diseases.
					</li>
					<li>
						<strong>Environmental and Vector Surveillance:</strong> To identify circulating pathogens by metagenomic sequencing, to get a granular map of the pathogen landscape in the city.
					</li>
					<li>
						<strong>Disease Ecology:</strong> To provide information that can help design effective vector control strategies, and better understand zoonotic spillover dynamics.
					</li>
					<li>
						<strong>Model and Predict:</strong> To build predictive models to predict, pre-empt and minimize spillover events, make digital health maps available and suggest frameworks for OneHealth-based public health programs.
					</li>
					<li>
						<strong>Partnerships and Public Engagement:</strong> To establish a framework and raise awareness and motivation for monitoring, predicting, and responding to disease outbreaks for public health decisions in urban and peri-urban Bengaluru.
					</li>
				</ul>
				<p className="text-primary-dark font-semibold mt-2">Impact Goals</p>
				<ul className="list-disc ml-5">
					<li>Integration of real-time surveillance and scientists in the field</li>
					<li>Involvement of local institutions</li>
					<li>Plan in place to mitigate outbreaks of prevalent diseases</li>
					<li>Social group and political groups involvement for implementation</li>
					<li>Citizen involvement</li>
				</ul>
				<p className="mt-2">End beneficiaries: Citizens through BBMP</p>
				<p className="text-primary-dark font-semibold mt-2">Members</p>
				<p>
					<strong>Project Leads:</strong> Prof. Farah Ishtiaq, TIGS; Prof. Uma Ramakrishnan, NCBS
				</p>
				<p>
					<strong>Other key members:</strong> Prof. Kavita Isvaran, IISc; Dr. Shannon Olsson, The Echo Network; Dr. Bhaskar, ARTPARK; Dr. Taslimarif Saiyed, C-CAMP; Mr. Ajay Raghavan, ICA
				</p>
				<p className="text-primary-dark font-semibold mt-2">Partner Institutions</p>
				<p>
					AI & Robotics Technology Park (ARTPARK), Bangalore Sustainability Forum, Bruhat Bengaluru Mahanagara Palike (BBMP), Centre for Cellular and Molecular Platforms (C-CAMP), Indian Institute of Science (IISc), Initiative for Climate Action (ICA), National Centre for Biological Sciences (NCBS), Tata Institute for Genetics and Society (TIGS), The Echo Network
				</p>
				<p className="mt-2">
					<span className="text-primary-dark font-semibold">Funded by:</span> Office of PSA to GoI
				</p>
			</>
		),
	},
	{
		title: "Precision Agriculture for Protected Farming",
		content: (
			<>
				<p className="text-primary-dark font-semibold">Thematic area</p>
				<p>Urban Life &gt; Precision Agriculture</p>
				<p className="text-primary-dark font-semibold mt-2">Objectives</p>
				<ul className="list-disc ml-5">
					<li>Monitoring and regulation of microclimatic condition for protected farming</li>
					<li>Pest management in protected cultivation system</li>
					<li>Sensing, Imaging and Delivery Systems in Precision Agriculture</li>
				</ul>
				<p className="text-primary-dark font-semibold mt-2">Proposed Outcomes</p>
				<ul className="list-disc ml-5">
					<li>Design and development of micro-climate-controlled polyhouse for roof-top and peri-urban agriculture</li>
					<li>
						Pest control: Air-sampler to monitor fungal spores, insect and pest loads in the polyhouse; Use of bio-derived insecticides, and{" "}
						<a
							href="https://bengalurucluster.blogspot.com/2024/08/definition-of-pheromones-pheromones-are.html"
							className="text-blue-600 underline"
							target="_blank"
							rel="noopener"
						>
							pheromones
						</a>{" "}
						to control pests in brinjal and tomato plants
					</li>
					<li>Precise and targeted pesticide delivery system</li>
					<li>Monitoring of plant status</li>
					<li>Design of a high impedance-based moisture sensor</li>
					<li>New sensor for rapid measurement of evapotranspiration</li>
				</ul>
				<p className="text-primary-dark font-semibold mt-2">Impact Goals</p>
				<p>
					Innovative products and solutions to improve urban and peri-urban agriculture with precision delivery of water, nutrients, and pesticides in newly developed polyhouses for urban and peri-urban agriculture.
				</p>
				<p className="text-primary-dark font-semibold mt-2">End beneficiaries</p>
				<ul className="list-disc ml-5">
					<li>
						<strong>Agritech companies:</strong> Seed companies, Drip irrigation companies, Manufacturers of hydroponics, aeroponics systems, Pest management companies
					</li>
					<li>
						<strong>Farmers:</strong> High value crops, Protected agriculture of high value vegetables, flowers and seeds, Virus-free potato tuber cultivators
					</li>
					<li>
						<strong>Agri startups:</strong> Drone based pesticide delivery, Agri-robots, Sensing of soil moisture and irrigation, AI & ML based imaging for detecting plant health status and disease
					</li>
				</ul>
				<p className="text-primary-dark font-semibold mt-2">Members</p>
				<p>
					<strong>Project Leads:</strong> Prof. M S Bobji, IISc
				</p>
				<p>
					<strong>Other key members:</strong> Dr. Kesavan Subaharan, NBAIR; Dr. Markandeya Gorantla, ATGC; Prof. Jishnu Keshavan, IISc; Prof. M S Sheshshayee, UAS; Prof. Mohan Raju B, UAS; Prof. Sreenivas K R, JNCASR; Prof. Sushmita Dash, IISc; Prof. Utpal Nath, IISc; Dr. Laxman R H, IIHR; Dr. Nagesh M, NBAIR; Dr. Shankara S Hebbar, IIHR; Prof. Eswaramoorthy M, JNCASR
				</p>
				<p className="text-primary-dark font-semibold mt-2">Partner Institutions</p>
				<p>
					ATGC Biotech Limited, ICAR-IIHR & NBRC, Bengaluru, Indian Institute of Science, Jawaharlal Nehru Centre for Advanced Scientific Research, Bangalore, University of Agriculture Sciences, Bangalore
				</p>
				<p className="mt-2">
					<span className="text-primary-dark font-semibold">Funded by:</span> Office of PSA to GoI
				</p>
			</>
		),
	},
	{
		title: "Digital Podiatry Kiosk",
		content: (
			<>
				<p className="text-primary-dark font-semibold">Digital Podiatry Clinic (DPoC)</p>
				<p>
					Diabetes is a growing health crisis in India, with an alarming rise in cases over the past few decades. One of the most debilitating complications of this condition is the development of{" "}
					<a
						href="https://bengalurucluster.blogspot.com/2023/12/digital-podiatry-clinic-d-poc-predicts.html"
						className="text-blue-600 underline"
						target="_blank"
						rel="noopener"
					>
						foot ulcers
					</a>
					, which can lead to severe consequences if left untreated, including amputation and even mortality. Patients with diabetes are at a higher risk of foot disorders such as loss of sensation in the feet, reduced blood flow to the feet and foot deformities. As the country grapples with this challenge, BeST (Bengaluru Science and Technology) Cluster at the Indian Institute of Science enables a unique collaboration between academia (IISc & Karnataka Institute of Endocrinology and Research), start-ups (Foot Secure |{" "}
					<a
						href="https://bengalurucluster.blogspot.com/2024/01/success-story-strideaide.html"
						className="text-blue-600 underline"
						target="_blank"
						rel="noopener"
					>
						StrideAIde
					</a>
					), and the government (BBMP | MoHFW) and is paving the way for a unique effort called The Digital Podiatry Clinic (D-PoC) aimed at early screening and management of diabetic foot disorders.
				</p>
				<p className="text-primary-dark font-semibold mt-2">D-PoC Benefits</p>
				<p>
					The D-PoC is designed to be user-friendly and non-invasive. A patient entering a D-PoC will first fill in their details, such as their history of diabetes, duration of symptoms, and medication and so on in a trilingual hand-held device such as a tablet. This will help to build a diabetic foot registry for further research. The D-PoC consists of three devices connected to a dashboard and trained paramedical staff to assist the patient. The patient has to first walk on a pedo-scanner, which displays the pressure points of the foot. Then, the patient is assessed using ‘Neurotouch’, a small portable device that can identify the level of peripheral neuropathy. Following this, the patient undergoes Ankle Brachial Index (ABI) and Toe Brachial Index (TBI) tests to check for blood-flow obstructions in the foot. Based on the results of the three tests, the patients are informed how likely they are to get a diabetic foot complication and how often they would be required to undergo a foot evaluation. The aim is to create a digital twin for each patient, predicting their chances of developing complications over time and providing preventive podiatry treatment, including self-offloading footwear, like the customized footwear developed by the team.
				</p>
				<img
					src="https://www.bestkc.in/wp-content/uploads/2025/06/qq2-6.png"
					alt="Digital Podiatry Kiosk"
					className="my-4 rounded shadow w-full max-w-md"
				/>
			</>
		),
	},
	{
		title: "Assessing the Impact of Yellow Line Mass Rapid Transit (MRT) system on Public Health and Quality of Life",
		content: (
			<>
				<p className="text-primary-dark font-semibold">Description</p>
				<p>
					Despite the growing emphasis on public transport, a significant gap exists in understanding the comprehensive impacts of Mass Rapid Transit (MRT) systems, particularly on public{" "}
					<a
						href="https://bengalurucluster.blogspot.com/2025/07/mobility-and-health.html"
						className="text-blue-600 underline"
						target="_blank"
						rel="noopener"
					>
						health
					</a>{" "}
					and overall quality of life. Existing studies often focus on singular aspects, such as emissions reduction or travel time savings, without integrating the broader dimensions of mental well-being, social inclusivity, and urban productivity. This study aims to bridge that gap by evaluating both objective metrics (e.g., changes in physical activity levels, exposure to pollutants, and accident risks) and subjective outcomes (e.g., commuter satisfaction and perceptions of social inclusivity). By addressing this gap, the research will provide policymakers and urban planners with actionable insights into how sustainable{" "}
					<a
						href="https://bengalurucluster.blogspot.com/2025/07/mobility-and-health.html"
						className="text-blue-600 underline"
						target="_blank"
						rel="noopener"
					>
						mobility
					</a>{" "}
					systems can enhance urban living conditions. Furthermore, it positions the Yellow Line MRT not merely as a transportation project but as a catalyst for socio-economic transformation and public health improvement in Bengaluru.
				</p>
				<p className="text-primary-dark font-semibold mt-2">Impact Goals</p>
				<ul className="list-disc ml-5">
					<li>Understanding connection between use of public transport and effect on human health</li>
					<li>Documenting the health outcomes such as physical activity changes</li>
					<li>Using this information to inform intersectoral approaches to health</li>
					<li>Informing the public policies which promote increased investment for public transport</li>
					<li>Bringing multiple stakeholders together to understand the connectedness and hence, need for more holistic planning</li>
				</ul>
				<p className="text-primary-dark font-semibold mt-2">Key members</p>
				<ul className="list-disc ml-5">
					<li>Ashish Verma, IISc</li>
					<li>Prabhdeep Kaur, IISc</li>
					<li>Aruna Sivakumar, Imperial College London</li>
				</ul>
				<p className="text-primary-dark font-semibold mt-2">Key organizations</p>
				<ul className="list-disc ml-5">
					<li>Indian Institute of Science</li>
					<li>Imperial College London</li>
					<li>ELCIA – Electronic City Industries Association</li>
					<li>Biocon Biologics & Syngene</li>
				</ul>
				<p className="mt-2">
					<span className="text-primary-dark font-semibold">Funded by:</span> Biocon Foundation
				</p>
			</>
		),
	},
	{
		title: "BASF-BeST STEM Scholarship for Government School Students",
		content: (
			<>
				<p className="text-primary-dark font-semibold">Description</p>
				<p>
					Foundation for Bengaluru Science & Technology in collaboration with BASF India is happy to introduce a catalytic STEM scholarship program to empower talented government school students with financial support and academic enrichment opportunities. The current call aims to support a total of 175 school students of class 8-10 from the schools located at Mangalore, Dahej and Navi Mumbai. Scholarship components include Basic needs, STEM DIY kits, Mentoring Sessions and Financial aid.
				</p>
				<p className="text-primary-dark font-semibold mt-2">Impact Goals</p>
				<ul className="list-disc ml-5">
					<li>Improved academic performance</li>
					<li>Increased STEM engagement</li>
					<li>Enhanced confidence and aspirations</li>
				</ul>
				<p className="text-primary-dark font-semibold mt-2">Key organizations</p>
				<ul className="list-disc ml-5">
					<li>BASF India</li>
					<li>Foundation for Science, Innovation and Development, IISc</li>
					<li>Science for Rural India</li>
				</ul>
				<p className="mt-2">
					<span className="text-primary-dark font-semibold">Funded by:</span> BASF India
				</p>
			</>
		),
	},
	{
		title: "Industry-Academia Synergy Workshop Series",
		content: (
			<>
				<p className="text-primary-dark font-semibold">Description</p>
				<p>
					Industry-Academia Synergy Workshop Series is a unique program designed by BeST for the faculty members of the institutions under DCTE, GoK, as part of the Avishkaara initiative of the Department of Higher Education, GoK which is a flagship program of the state to enhance the IP ecosystem of the Government Engineering Colleges, Polytechnics and First Grade Degree Colleges. Industry-academia synergy will enhance the quantity and quality of Intellectual Property (IP) produced within academic settings by providing access to real-world problems and emerging market needs, shared ecosystems, knowledge sharing, and improving the commercialization pathways. Each workshop brings together 25-30 faculty members and 3-5 industry experts in a specific theme and consists of panel discussions and brainstorming sessions to help identify industry-aligned research areas with IP potential and explore possible collaborative opportunities to enhance the synergies between industry and academic institutions.
				</p>
				<p className="text-primary-dark font-semibold mt-2">Impact Goals</p>
				<ul className="list-disc ml-5">
					<li>Capacity Building in faculty members of state government institutions.</li>
					<li>Industry-inspired ideas with IP potential.</li>
					<li>Industry expectations in academia-industry collaboration.</li>
				</ul>
				<p className="text-primary-dark font-semibold mt-2">Key organizations</p>
				<ul className="list-disc ml-5">
					<li>IPTel Indian Institute of Science</li>
					<li>Karnataka State Council for Science and Technology</li>
				</ul>
				<p className="mt-2">
					<span className="text-primary-dark font-semibold">Funded by:</span> Directorate of Collegiate and Technical Education, Government of Karnataka
				</p>
			</>
		),
	},
];

function Accordion({ items }) {
	const [openIndex, setOpenIndex] = useState(null);
	const [closingIndex, setClosingIndex] = useState(null);

	return (
		<div className="max-w-[800px] mx-auto text-xl my-24">
			{items.map((item, idx) => (
				<div key={idx} className="">
					<button
						className={`w-full text-left px-6 py-4 font-bold text-xl text-primary-light flex justify-between items-center`}
						onClick={() => {
							if (openIndex === idx) {
								// Start closing animation
								setClosingIndex(idx);
								setOpenIndex(null);
								// Clear closing state after animation
								setTimeout(() => setClosingIndex(null), 700);
							} else {
								// Open new item
								setClosingIndex(null);
								setOpenIndex(idx);
							}
						}}
					>
						{item.title}
						<span className="ml-2">{openIndex === idx ? "−" : "+"}</span>
					</button>
					<div
						className={`transition-all duration-700 ease-in-out overflow-hidden px-6 ${
							openIndex === idx 
								? 'max-h-[2000px] opacity-100 py-4' 
								: 'max-h-0 opacity-0 py-0'
						}`}
						style={{ transitionProperty: 'max-height, opacity, padding' }}
					>
						{(openIndex === idx || closingIndex === idx) && (
							<div className="text-gray-800">
								{item.content}
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
}

export default function Fundings() {
	return (
		<div className="w-full font-inter">
			<div className="bg-primary-light min-h-32 pt-8">
        <h1 className="text-5xl font-thin text-white max-w-[800px] mx-auto">Funded Projects</h1>
      </div>
			<Accordion items={projects} />
		</div>
	);
}
