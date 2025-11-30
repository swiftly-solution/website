---
title: CCSUsrMsg_RoundEndReportData
---

# Interface CCSUsrMsg_RoundEndReportData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_RoundEndReportData : ITypedProtobuf<CCSUsrMsg_RoundEndReportData>, INativeHandle, INetMessage<CCSUsrMsg_RoundEndReportData>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_RoundEndReportData>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_RoundEndReportData>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### AllRerEventData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_RoundEndReportData_RerEvent> AllRerEventData { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_RoundEndReportData_RerEvent](/docs/api/protobufdefinitions/ccsusrmsg_roundendreportdata_rerevent)>

### InitConditions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData.cs#L18)

```csharp
CCSUsrMsg_RoundEndReportData_InitialConditions InitConditions { get; }
```

#### Property Value

- [CCSUsrMsg_RoundEndReportData_InitialConditions](/docs/api/protobufdefinitions/ccsusrmsg_roundendreportdata_initialconditions)

