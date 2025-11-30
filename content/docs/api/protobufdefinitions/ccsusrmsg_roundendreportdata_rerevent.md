---
title: CCSUsrMsg_RoundEndReportData_RerEvent
---

# Interface CCSUsrMsg_RoundEndReportData_RerEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_RoundEndReportData_RerEvent : ITypedProtobuf<CCSUsrMsg_RoundEndReportData_RerEvent>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_RoundEndReportData_RerEvent>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AllDamageData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L31)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_RoundEndReportData_RerEvent_Damage> AllDamageData { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_RoundEndReportData_RerEvent_Damage](/docs/api/protobufdefinitions/ccsusrmsg_roundendreportdata_rerevent_damage)>

### CtAlive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L19)

```csharp
int CtAlive { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ObjectiveData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L28)

```csharp
CCSUsrMsg_RoundEndReportData_RerEvent_Objective ObjectiveData { get; }
```

#### Property Value

- [CCSUsrMsg_RoundEndReportData_RerEvent_Objective](/docs/api/protobufdefinitions/ccsusrmsg_roundendreportdata_rerevent_objective)

### TAlive

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L22)

```csharp
int TAlive { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TerroristOdds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L16)

```csharp
int TerroristOdds { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Timestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L13)

```csharp
float Timestamp { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VictimData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L25)

```csharp
CCSUsrMsg_RoundEndReportData_RerEvent_Victim VictimData { get; }
```

#### Property Value

- [CCSUsrMsg_RoundEndReportData_RerEvent_Victim](/docs/api/protobufdefinitions/ccsusrmsg_roundendreportdata_rerevent_victim)

