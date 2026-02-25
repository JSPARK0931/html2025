import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { fetchAllCounsels, fetchCounselsBeforeAccept } from '../../../api/counselApi';
import { useAuthStore } from '../../../store/auth.store';

// TODO: DB 연동 가이드
// 이 페이지는 상담사의 수익성 분석 대시보드입니다
//
// DB 연동 시 필요한 작업:
// 1. 활동 통계 조회 API
//    - API: GET /api/counselors/me/activity-stats?period={period}
//    - period: '전체' | '이번주' | '이번달' | '3개월'
//    - 응답:
//      {
//        // 기간 내 상담 건수
//        totalCount: number,          // 전체
//        phoneCount: number,          // 전화
//        riskCount: number,           // 위험
//        completedCount: number,      // 완료
//        counselingCount: number,     // 상담
//        visitCount: number,          // 방문
//        reservationCount: number,    // 예약
//        chatCount: number,           // 채팅
//
//        // 기간 내 활동 건수
//        riskCount: number,           // 위험군 상담 건수
//        completedConsultCount: number, // 완료 상담 건수
//        reservedConsultCount: number,  // 예약 상담 건수
//        totalConsultCount: number      // 전체 상담 건수
//      }
//
// 2. 수익 정보 조회 API
//    - API: GET /api/counselors/me/revenue?period={period}
//    - period: '전체' | '이번주' | '이번달' | '3개월'
//    - 응답:
//      {
//        totalRevenue: number,      // 금일 기준 총 수익
//        totalExpense: number,      // 금일 지출 총
//        netProfit: number,         // 순이익 (수익 - 지출)
//        monthlyEstimate: number    // 개월별 예상 수익
//      }
//
// 3. 주간 활동 타임라인 조회 API
//    - API: GET /api/counselors/me/weekly-timeline?period={period}
//    - period: '전체' | '이번주' | '이번달' | '3개월'
//    - 응답:
//      {
//        period: string,            // 기간 표시용 (예: "2025.02.02 ~ 2025.03.01")
//        timeline: [
//          {
//            day: string,           // 월, 화, 수, 목, 금, 토, 일
//            reservedCount: number, // 예약 건수
//            completedCount: number // 완료 건수
//          }
//        ]
//      }
//
// 4. 상담 내역 조회 API (최근 5개)
//    - API: GET /api/counselors/me/counsels?limit=5&sort=recent&period={period}
//    - 응답:
//      {
//        counsels: [
//          {
//            id: string,
//            title: string,
//            clientName: string,
//            date: string,
//            status: string,        // '상담 예약', '상담 완료', etc
//            type: string           // chat, call, visit
//          }
//        ]
//      }
//
// 5. 예약 관리 조회 API (최근 5개)
//    - API: GET /api/counselors/me/reservations?limit=5&status=pending,confirmed&period={period}
//    - 응답:
//      {
//        reservations: [
//          {
//            id: string,
//            title: string,
//            clientName: string,
//            date: string,
//            status: string,
//            type: string
//          }
//        ]
//      }

const MyCounsel = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [periodFilter, setPeriodFilter] = useState('전체'); // 전체, 이번주, 이번달, 3개월
  const [selectedPeriod, setSelectedPeriod] = useState('2025.02.02 ~ 2025.03.01');
  const [loading, setLoading] = useState(false);

  // TODO: DB 연동 시 state로 관리
  const [activityStats, setActivityStats] = useState(null);
  const [revenueData, setRevenueData] = useState(null);
  const [weeklyTimeline, setWeeklyTimeline] = useState([]);
  const [counselHistory, setCounselHistory] = useState([]);
  const [reservations, setReservations] = useState([]);
  const { email } = useAuthStore();

  // TODO: DB 연동 시 useEffect로 데이터 로드
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // const [activity, revenue, timeline, history, reservationsList] = await Promise.all([
        //   fetch('/api/counselors/me/activity-stats?period=' + periodFilter).then(r => r.json()),
        //   fetch('/api/counselors/me/revenue?period=' + periodFilter).then(r => r.json()),
        //   fetch('/api/counselors/me/weekly-timeline?period=' + periodFilter).then(r => r.json()),
        //   fetch('/api/counselors/me/counsels?limit=5&sort=recent&period=' + periodFilter).then(r => r.json()),
        //   fetch('/api/counselors/me/reservations?limit=5&status=pending,confirmed&period=' + periodFilter).then(r => r.json())
        // ]);
        // setActivityStats(activity);
        // setRevenueData(revenue);
        // setWeeklyTimeline(timeline);
        // setCounselHistory(history.counsels);
        // setReservations(reservationsList.reservations);
      } catch (error) {
        console.error('데이터 로드 실패:', error);
        // TODO: 에러 처리 (토스트 메시지 등)
      } finally {
        setLoading(false);
      }
    };
    const getAllList = async () => {
      const { content: data } = await fetchAllCounsels({
        page: 0,
        size: 5,
        cnslerId: email,
      });
      setCounselHistory(data);
      console.log('test data', data);
    };

    const getBeforAcceptList = async () => {
      const { content: data } = await fetchCounselsBeforeAccept({
        page: 0,
        size: 5,
        cnslerId: email,
      });
      setReservations(data);
    };

    getAllList();
    getBeforAcceptList();

    // loadData(); // TODO: DB 연동 시 주석 해제
  }, [periodFilter, email]);

  // 더미 데이터 (TODO: DB 연동 시 제거)
  // 기간 내 상담 건수 데이터
  const counselCountData = activityStats
    ? [
        { label: '전체', count: activityStats.totalCount || 0, color: 'bg-blue-500' },
        { label: '전화', count: activityStats.phoneCount || 0, color: 'bg-blue-500' },
        { label: '위험', count: activityStats.riskCount || 0, color: 'bg-red-500' },
        { label: '완료', count: activityStats.completedCount || 0, color: 'bg-cyan-400' },
        { label: '상담', count: activityStats.counselingCount || 0, color: 'bg-cyan-400' },
        { label: '방문', count: activityStats.visitCount || 0, color: 'bg-yellow-400' },
        { label: '예약', count: activityStats.reservationCount || 0, color: 'bg-yellow-400' },
        { label: '채팅', count: activityStats.chatCount || 0, color: 'bg-yellow-400' },
      ]
    : [
        { label: '전체', count: 66, color: 'bg-blue-500' },
        { label: '전화', count: 66, color: 'bg-blue-500' },
        { label: '위험', count: 10, color: 'bg-red-500' },
        { label: '완료', count: 12, color: 'bg-cyan-400' },
        { label: '상담', count: 12, color: 'bg-cyan-400' },
        { label: '방문', count: 54, color: 'bg-yellow-400' },
        { label: '예약', count: 54, color: 'bg-yellow-400' },
        { label: '채팅', count: 54, color: 'bg-yellow-400' },
      ];

  // 기간 내 활동 건수 데이터
  const activityCountData = activityStats
    ? [
        { label: '위험군 상담 건수', count: activityStats.riskCount || 0, icon: '🚨' },
        { label: '완료 상담 건수', count: activityStats.completedConsultCount || 0, icon: '✅' },
        { label: '예약 상담 건수', count: activityStats.reservedConsultCount || 0, icon: '📅' },
        { label: '전체 상담 건수', count: activityStats.totalConsultCount || 0, icon: '📊' },
      ]
    : [
        { label: '위험군 상담 건수', count: 10, icon: '🚨' },
        { label: '완료 상담 건수', count: 12, icon: '✅' },
        { label: '예약 상담 건수', count: 54, icon: '📅' },
        { label: '전체 상담 건수', count: 66, icon: '📊' },
      ];

  // 그래프 최대값 계산 (TODO: DB 연동 시 activityStats, counselData에서 계산)
  const maxCounselValue = Math.max(...counselCountData.map((d) => d.count), 1);

  const revenue = revenueData || {
    totalRevenue: 1000000,
    totalExpense: 550000,
    netProfit: 200000,
    monthlyEstimate: 0,
  };

  // 주간 그래프 데이터 (TODO: DB 연동 시 weeklyTimeline 사용)
  const weeklyData =
    weeklyTimeline.length > 0
      ? weeklyTimeline.map((item) => ({
          day: item.day,
          reservedCount: item.reservedCount,
          completedCount: item.completedCount,
        }))
      : [
          { day: '월', reservedCount: 10, completedCount: 8 },
          { day: '화', reservedCount: 15, completedCount: 12 },
          { day: '수', reservedCount: 20, completedCount: 15 },
          { day: '목', reservedCount: 25, completedCount: 20 },
          { day: '금', reservedCount: 18, completedCount: 14 },
          { day: '토', reservedCount: 12, completedCount: 10 },
          { day: '일', reservedCount: 8, completedCount: 6 },
        ];

  const maxWeeklyValue = Math.max(...weeklyData.map((d) => Math.max(d.reservedCount, d.completedCount)), 1);

  // 상담 내역 더미 데이터 (TODO: DB 연동 시 counselHistory 사용)
  const counselHistoryData =
    counselHistory.length > 0
      ? counselHistory.map((item) => ({
          id: item.cnslId,
          title: item.cnslTitle,
          clientName: item.nickname,
          date: item.dtTime,
          status: item.statusText,
          respYn: item.respYn,
        }))
      : [];

  // 예약 관리 더미 데이터 (TODO: DB 연동 시 reservations 사용)
  const reservationsData =
    reservations.length > 0
      ? reservations.map((item) => ({
          id: item.cnslId,
          title: item.cnslTitle,
          clientName: item.nickname,
          date: item.dtTime,
          status: '상담 예약',
        }))
      : [];

  // 핸들러 함수들
  const handleViewAllHistory = () => {
    navigate('/system/info/counsel-history-list');
  };

  const handleViewAllReservations = () => {
    navigate('/system/info/counsel-reservation-list');
  };

  const handleViewDetail = (counselId) => {
    navigate(`/system/info/counsel/${counselId}`);
  };

  // 로딩 중일 때 (TODO: DB 연동 시 활성화)
  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-[#f3f7ff] flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
  //         <p className="text-gray-600">데이터를 불러오는 중...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full">
      {/* PC VERSION */}
      <div className="hidden lg:block w-full min-h-screen bg-[#f3f7ff]">
        <div className="max-w-[1520px] mx-auto px-8 py-16">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-[30px] font-semibold text-gray-800">상담 내역</h1>
            <button
              onClick={() => navigate('/system/mypage')}
              className="px-8 py-3 rounded-xl bg-[#2563eb] text-white text-base font-normal hover:bg-[#1d4ed8] transition-colors"
            >
              뒤로 가기
            </button>
          </div>

          {/* 활동 내역 요약 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[24px] font-semibold text-gray-800">활동 내역 요약</h2>

              {/* 기간 필터 버튼 */}
              <div className="flex items-center gap-3">
                {['전체', '이번주', '이번달', '3개월'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setPeriodFilter(filter)}
                    className={`px-6 py-2.5 rounded-xl text-base font-medium transition-all ${
                      periodFilter === filter
                        ? 'bg-[#2563eb] text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#2563eb]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* 기간 내 상담 건수 */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h3 className="text-[20px] font-bold text-gray-800 mb-6">기간 내 상담 건수</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {counselCountData.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-sm text-gray-700 font-medium min-w-[45px]">{item.label} :</span>
                      <span
                        className={`text-base font-bold ${
                          item.label === '전체' || item.label === '전화'
                            ? 'text-blue-600'
                            : item.label === '위험'
                              ? 'text-red-600'
                              : item.label === '완료' || item.label === '상담'
                                ? 'text-cyan-600'
                                : 'text-yellow-600'
                        }`}
                      >
                        {item.count}
                      </span>
                      <div className="flex-1">
                        <div className="h-5 bg-gray-200 rounded overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${item.color}`}
                            style={{ width: `${(item.count / maxCounselValue) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 기간 내 활동 건수 */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[20px] font-bold text-gray-800">기간 내 활동 건수</h3>
                  <button
                    onClick={() => navigate('/system/info/risk-cases')}
                    className="text-red-500 text-sm font-medium hover:text-red-600 transition-colors"
                  >
                    위험군 조치 내역 &gt;
                  </button>
                </div>
                <div className="space-y-4">
                  {activityCountData.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700 font-medium mb-1">{item.label}</p>
                        <p className="text-2xl font-bold text-blue-600">{item.count} 건</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 내 수익 */}
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h3 className="text-[18px] font-medium text-gray-800 mb-6">내 수익</h3>
              <div className="flex items-start gap-8">
                {/* 포인트 아이콘 */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">💰</span>
                  </div>
                </div>

                {/* 수익 정보 */}
                <div className="flex-1 grid grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">금일 기준 총</p>
                    <p className="text-xl font-bold text-blue-600">{revenue.totalRevenue.toLocaleString()}원</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">금일 지출 총</p>
                    <p className="text-xl font-bold text-red-600">{revenue.totalExpense.toLocaleString()}원</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">순이익 : 지출 시 잔액</p>
                    <p className="text-xl font-bold text-green-600">{revenue.netProfit.toLocaleString()}원</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">개월별 예상 수익</p>
                    <p className="text-xl font-bold text-gray-800">{revenue.monthlyEstimate.toLocaleString()}원</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 주간 그래프 */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[18px] font-medium text-gray-800">{selectedPeriod}</h3>
              </div>
              <div className="relative h-64">
                <div className="flex items-end justify-around h-full pb-8">
                  {weeklyData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1">
                      <div className="relative w-full flex items-end justify-center gap-2" style={{ height: '200px' }}>
                        {/* 예약 건수 */}
                        <div
                          className="bg-cyan-400 rounded-t-lg transition-all duration-500"
                          style={{
                            height: `${(data.reservedCount / maxWeeklyValue) * 100}%`,
                            width: '40%',
                            minHeight: data.reservedCount > 0 ? '8px' : '0',
                          }}
                        ></div>
                        {/* 완료 건수 */}
                        <div
                          className="bg-teal-500 rounded-t-lg transition-all duration-500"
                          style={{
                            height: `${(data.completedCount / maxWeeklyValue) * 100}%`,
                            width: '40%',
                            minHeight: data.completedCount > 0 ? '8px' : '0',
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{data.day}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-cyan-400 rounded"></div>
                  <span className="text-sm text-gray-600">예약 건수</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <span className="text-sm text-gray-600">완료 건수</span>
                </div>
              </div>
            </div>
          </div>

          {/* 내 상담 내역 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[24px] font-semibold text-gray-800">내 상담 내역</h2>
              <button
                onClick={handleViewAllHistory}
                className="px-6 py-2 rounded-xl bg-[#2563eb] text-white text-base font-medium hover:bg-[#1d4ed8] transition-colors"
              >
                전체 보기
              </button>
            </div>
            <div className="space-y-4">
              {counselHistoryData.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => handleViewDetail(item.id)}
                  className={`bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between cursor-pointer hover:shadow-lg transition-all ${
                    idx === 0 ? 'bg-cyan-50' : idx === 1 ? 'bg-blue-50' : idx === 2 ? 'bg-orange-50' : ''
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-gray-800 mb-2">{item.title}</h3>
                    <div className="flex flex-col gap-2.5 text-sm text-gray-600">
                      <span>상담자 : {item.clientName}</span>
                      <div className="flex justify-between">
                        <span>
                          상태 :{' '}
                          <span
                            className={
                              item.status === '상담 예정'
                                ? 'text-[#2563eb]'
                                : item.status === '상담 진행 중'
                                  ? 'text-[#ff8d28]'
                                  : 'text-chat'
                            }
                          >
                            {item.status}
                          </span>
                        </span>
                        <span className="text-[#ff8d28] mr-12.5">
                          {item.respYn === '답변 필요' ? '답변 필요' : null}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {item.status === '상담 완료' ? '완료 일시' : '예약 일시'} : {item.date}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetail(item.id);
                    }}
                    className={`px-8 py-3 rounded-xl text-white text-base font-medium transition-colors ${
                      item.status === '상담 예정'
                        ? 'bg-[#2563eb] hover:bg-blue-600'
                        : item.status === '상담 진행 중'
                          ? 'bg-[#ff8d28] hover:bg-orange-500'
                          : 'bg-chat hover:bg-cyan-500'
                    }`}
                  >
                    {item.status}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 상담 예약 관리 */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[24px] font-semibold text-gray-800">상담 예약 관리</h2>
              <button
                onClick={handleViewAllReservations}
                className="px-6 py-2 rounded-xl bg-[#2563eb] text-white text-base font-medium hover:bg-[#1d4ed8] transition-colors"
              >
                전체 보기
              </button>
            </div>
            <div className="space-y-4">
              {reservationsData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleViewDetail(item.id)}
                  className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-gray-800 mb-2">{item.title}</h3>
                    <div className="flex flex-col gap-2.5 text-sm text-gray-600">
                      <span>상담자 : {item.clientName}</span>
                      <span>
                        상태 : <span className="text-[#2563eb]">{item.status}</span>
                      </span>
                      <p className="text-sm text-gray-500">예약 일시 : {item.date}</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetail(item.id);
                    }}
                    className="px-8 py-3 rounded-xl bg-[#2563eb] text-white text-base font-medium hover:bg-blue-600 transition-colors"
                  >
                    {item.status}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCounsel;
