import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class Screen extends Component {
  constructor(props) {
      super(props);
      this.state = {
          cafeteriaList : [],
          recentList : [],
          menu: 0,
      }
  }

  componentDidMount() {
      this.fillList();
  }

  // 식당 메뉴 리스트, 최근 이용 리스트 채우는 함수
  fillList = () => {
    var list1 = [];
    var list2 = [];
    for(let i = 0; i < 20; i++) {
        list1.push(
          <View style={styles.menuElement}>
              <View style={styles.circleCafeteria}/>
              <Text style={{fontSize: 13, color: '#00000099', marginTop: -6}}>전체</Text>
          </View>
        );
        list2.push(
          <View style={styles.recentElement}>
              <View style={{width: 120, height: 120, backgroundColor: '#F2F2F7'}}/>
              <Text style={{fontSize: 14, marginTop: 8}}>부를샘</Text>
              <Text style={{fontSize: 12, color: '#8A8A8E', marginTop: 3}}>학생회관 1층</Text>
          </View>
        );
    }
    this.setState({cafeteriaList : list1, recentList : list2});
  }
  
  // 식당 선택 상태 바꾸는 함수
  changeMenu = (index) => {
    this.setState({...this.state, menu: index});
  }


  // 컴포넌트 분리 고민 필요 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            {/* png 파일 깨짐 */}
            <Image style={styles.icon} source={require('./assets/qr_header_black.png')}></Image>
            <Text style={styles.headerText}>헤더_메인</Text>
            <Image style={styles.icon} source={require('./assets/search_header_black.png')}></Image>
        </View>

        <View style={{width: "100%"}}>
            {/* 스크롤뷰의 루트나 스크롤뷰에서 flex를 쓰면 컨텐츠가 안 뜸 */}
          <ScrollView>
            <View style={styles.headerImage}/>
            <View style={styles.between}/>

            <View style={styles.menu}>
                {/* View에서는 onPress 지원 안함 */}
                <TouchableOpacity style={ this.state.menu === 0 ? styles.menuBoxPressed : styles.menuBox } 
                onPress={() => this.changeMenu(0)}>
                    <Text style={this.state.menu === 0 ? styles.menuTextPressed : styles.menuText}>전체</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ this.state.menu === 1 ? styles.menuBoxPressed : styles.menuBox } 
                onPress={() => this.changeMenu(1)}>
                    <Text style={this.state.menu === 1 ? styles.menuTextPressed : styles.menuText}>학생식당</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ this.state.menu === 2 ? styles.menuBoxPressed : styles.menuBox } 
                onPress={() => this.changeMenu(2)}>
                    <Text style={this.state.menu === 2 ? styles.menuTextPressed : styles.menuText}>학생식당</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ this.state.menu === 3 ? styles.menuBoxPressed : styles.menuBox } 
                onPress={() => this.changeMenu(3)}>
                    <Text style={this.state.menu === 3 ? styles.menuTextPressed : styles.menuText}>학생식당</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.menuContents}>
                {/* 두 줄로 flex wrap 설정해놓았으나 순서 때문에 고민 필요 */}
                <ScrollView horizontal={true} contentContainerStyle={styles.twoRow}>
                    { this.state.cafeteriaList.map((cafeteria, index) => {
                        return cafeteria;})
                    }
                </ScrollView>
            </View>
            <View style={styles.between}/>

            <View style={styles.title}>
                <Text style={styles.titleText}>최근에 이용한 식당/카페</Text>
            </View>
            <View style={styles.recentContents}>
                <ScrollView horizontal={true}>
                    { this.state.recentList.map((recent, index) => {
                        return recent;})
                    }
                </ScrollView>
            </View>
            <View style={styles.betweenTwo}/>
            
            <View style={styles.title}>
                <Text style={styles.titleText}>실시간 리뷰</Text>
            </View>

            <View style={styles.profile}>
                <View style={styles.circleProfile}/>
                <Text style={{fontSize: 15,marginLeft: 7}}>윤*탁</Text>
            </View>
            
            <View style={{marginLeft: 20, marginRight:20,}}>
                <View style={{width: 335, height: 335, marginTop: 7,
                backgroundColor: '#F2F2F7'}}></View>
                <View style={{width: 335, height: "auto", alignItems: "flex-start", 
                marginTop: 12, marginBottom: 24}}>
                    <Text style={{fontSize: 15}}>돈육 이태리피자</Text>
                    <Text style={{fontSize: 13, color: '#666666', marginTop: 4}}>고를샘</Text>
                    <Text style={{fontSize: 13, color: 'black', marginTop: 12}}>너무너무 맛있습니다. 오늘먹고 내일 또먹고 매일매일 먹고싶네요. 생긴 것만 봐도 군침이 돌아요</Text>
                </View>
            </View>

            <View style={styles.profile}>
                <View style={styles.circleProfile}/>
                <Text style={{fontSize: 15,marginLeft: 7}}>윤*탁</Text>
            </View>
            
            <View style={{marginLeft: 20, marginRight:20,}}>
                <View style={{width: 335, height: 135, marginTop: 7,
                backgroundColor: '#F2F2F7'}}></View>
                <View style={{width: "100%", height: "auto", alignItems: "flex-start", marginTop: 12}}>
                    <Text style={{fontSize: 15}}>돈육 이태리피자</Text>
                    <Text style={{fontSize: 13, color: '#666666', marginTop: 4}}>고를샘</Text>
                    <Text style={{fontSize: 13, color: 'black', marginTop: 12}}>너무너무 맛있습니다. 오늘먹고 내일 또먹고 매일매일 먹고싶네요. 생긴 것만 봐도 군침이 돌아요</Text>
                </View>
                <TouchableOpacity style={{width: 335, height: 44, marginTop: 16,
                marginBottom: 250, alignItems: 'center', justifyContent: 'center',
                borderColor: '#069BE5', borderStyle: 'solid', borderWidth: '1px', borderRadius: '5'}}>
                    <Text style={{color: '#069BE5', fontSize: 15}}>PICK 전체보기</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.fab}>
                <Image style={{width:40, height:32}} source={require('./assets/cart.png')}></Image>
            </TouchableOpacity>
            

          </ScrollView>
        </View>
      </View>
    );
  }
}

// pt 사이즈 Normalize 필요 아이폰8 & 아이폰XR 사이즈 다르게 나옴
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 13,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 44,
    height: 44,
  },
  header: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 17,
  },
  headerImage: {
    width: "100%",
    height: 120,
    backgroundColor: '#f2f2f7',
  },
  between: {
    width: "100%",
    height: 8,
    backgroundColor: '#F0F0F0'
  },
  betweenTwo: {
    width: "100%",
    height: 64,
    backgroundColor: '#F0F0F0'
  },
  menu: {
    width: "100%",
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  menuBox: {
    width: 94,
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 15,
    color: '#8A8A8E',
  },
  menuBoxPressed: {
    width: 94,
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#069BE5',
    borderBottomWidth: 1,
  },
  menuTextPressed: {
    fontSize: 15,
    color: '#069BE5',
  },
  twoRow: {
    width: "200%",
    height: "100%",
    flexDirection: 'row',
    flexWrap: "wrap",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  menuContents: {
    width: "100%",
    height: 200,
    marginLeft: 6,
  },
  menuElement: {
    width: 80,
    height: 96,
    marginTop: 3,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleCafeteria: {
    width:56,
    height:56, 
    backgroundColor: '#F2F2F7', 
    borderRadius: 30,
    margin: 12,
  },
  title: {
      width: "100%",
      height: 60,
      alignItems: 'flex-start',
      justifyContent: 'center'
  },
  titleText: {
      fontSize: 17,
      color: "#000000",
      marginLeft: 20,
  },
  recentContents: {
      width: "100%",
      height: 160,
      marginLeft: 20,
      marginBottom: 20,
  },
  recentElement: {
      width: 120,
      height: 152,
      marginRight: 8,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 20,
    alignItems: 'center',
  },
  circleProfile: {
    width:28,
    height:28, 
    backgroundColor: '#F2F2F7', 
    borderRadius: 30,
  },
  fab: {
    width: 67,  
    height: 67,   
    borderRadius: 40,            
    backgroundColor: '#069BE5',                                    
    position: 'absolute', 
    bottom: 265,                                                
    right: 15, 
    alignItems: 'center',
    justifyContent: 'center'
  },


});
