---
title: CCSUsrMsg_RoundEndReportData
---

```csharp
public interface CCSUsrMsg_RoundEndReportData : ITypedProtobuf<CCSUsrMsg_RoundEndReportData>, INativeHandle, INetMessage<CCSUsrMsg_RoundEndReportData>, IDisposable
```

#### Implements

## Properties

**AllRerEventData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_RoundEndReportData_RerEvent> AllRerEventData { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCSUsrMsg_RoundEndReportData_RerEvent](/docs/api/shared/protobufdefinitions/ccsusrmsg_roundendreportdata_rerevent)>

**InitConditions** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData.cs#L18)

```csharp
CCSUsrMsg_RoundEndReportData_InitialConditions InitConditions { get; }
```

#### Property Value

- [CCSUsrMsg_RoundEndReportData_InitialConditions](/docs/api/shared/protobufdefinitions/ccsusrmsg_roundendreportdata_initialconditions)

