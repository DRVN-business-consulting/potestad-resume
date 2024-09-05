import React from 'react';
import { StatusBar, ScrollView, View, Text, Image, SectionList } from 'react-native';
import { styles } from '../assets/styles/index.js';

const Main = () => {
    const content = [
        {
            title: "PROFESSIONAL SUMMARY",
            data: [
                "A web developer with 3 years of experience in developing web applications, specializing in building modern, interactive web applications using Vue.js and React.js. Proven ability to build user-friendly and responsive interfaces, ensuring a seamless user experience across all devices."
            ]
        },
        {
            title: "TECHNICAL SKILLS",
            data: [
                "Front-end : HTML, CSS, JavaScript, Vue.js, React.js, Next.js, Tailwind CSS, Bootstrap, JQuery",
                "Back-end : PHP, Java, Codeigniter",
                "Database Management : MySQL",
                "Version Control : Git, Github",
                "Others : Testing and Debugging, Responsive Web Design, UI/UX, Technical Communication"]
        },
        {
            title: "WORK EXPERIENCE",
            data: 
                ["Information Systems Analyst II", "Philippine Statistics Authority", "Jan 2022 - Present"]
        },
        {
            title: "SEMINARS & TRAININGS",
            data: 
                [
                "2024 : Advanced Database Training using MySQL, PSA",
                "2024 : Java Spring REST Services & Front End Frameworks Training, PSA", 
                "2024 : Mile2 C)SWAE Training, PSA",
                "2021 : PHP Training, PSA",
                "2020 : Web Development Level III, TESDA",
                "2016 : PC Operation at Xavier Technical Training Education"
            ]
        },
        {
            title: "EDUCATIONAL BACKGROUND",
            data: ["Bachelor of Science in Information Technology", "Quezon City University", "2016-2020"]
        }
    ]

    return (
        <>
            <StatusBar style="auto" backgroundColor="black" />
            <ScrollView style={{flex : 1, width: '100%'}}>
                <View style={{
                    width: '100%',
                    backgroundColor: "pink",
                    alignItems: 'center',
                    display : 'flex',
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    padding: 5
                }}>
                    <View style={{alignItems: 'center', paddingLeft: 25}}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>ANALYN POTESTAD</Text>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>potestad29@gmail.com</Text>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>+63 995 9531 705</Text>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Novaliches, Quezon City</Text>
                        
                    </View>
                    <View style={{ alignItems: 'right' }}> 
                        <Image
                            style={{
                                resizeMode: 'contain',
                                height: 150,
                                width: 130,
                              
                            }}
                            source={require('../assets/image.jpg')}
                        />
                    </View>
                </View>    
                {/* <View style={{
                    width: '100%',
                    display : 'flex',
                    flexDirection: 'row', 
                    alignItems: 'flex-start',
                    justifyContent: 'space-between', 
                    padding: 10,
                    
                }}>
                    <View style={{width :'55%', marginRight: 2}}>
                        <Text style={{fontWeight: 'bold', borderLeftColor: 'pink', borderLeftWidth: 4, padding: 2}}>PROFESSIONAL SUMMARY</Text>
                        <Text>A web developer with 3 years of experience in developing web applications, specializing in building modern, interactive web applications using Vue.js and React.js. Proven ability to build user-friendly and responsive interfaces, ensuring a seamless user experience across all devices.</Text>
                    </View>
                    <View style={{width :'45%', marginLeft: 2}}>
                        <Text style={{fontWeight: 'bold', borderLeftColor: 'pink', borderLeftWidth: 4, padding: 2}}>WORK EXPERIENCE</Text>
                    </View>
                </View> */}
                <SectionList
                    style={{
                    marginHorizontal: 16,
                    }}
                    sections={content}
                    renderItem={({ item }) => (
                    <View
                        style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        }}
                    >
                        <Text
                        style={{
                            // color: "#0e7490",
                            marginTop: 4,
                            // borderLeftColor: "pink",
                            // borderLeftWidth: 1
                        }}
                        >
                        {item}
                        </Text>
                    </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                    <Text
                        style={{
                        // color: "#0e7490",
                        fontSize: 16,
                        fontWeight: "bold",
                        marginTop: 12,
                        paddingVertical: 12,
                        borderBottomWidth: 2,
                        borderColor: "pink",
                        }}
                    >
                        {title}
                    </Text>
                    )}
                />     
            </ScrollView>
        </>
    );
}

export default Main