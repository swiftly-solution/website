---
title: CCSUsrMsg_RoundEndReportData_RerEvent
---

```csharp
public interface CCSUsrMsg_RoundEndReportData_RerEvent : ITypedProtobuf<CCSUsrMsg_RoundEndReportData_RerEvent>, INativeHandle
```

#### Implements

## Properties

### AllDamageData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L31)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_RoundEndReportData_RerEvent_Damage> AllDamageData { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCSUsrMsg_RoundEndReportData_RerEvent_Damage](/docs/api/shared/protobufdefinitions/ccsusrmsg_roundendreportdata_rerevent_damage)>

### CtAlive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L19)

```csharp
int CtAlive { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ObjectiveData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L28)

```csharp
CCSUsrMsg_RoundEndReportData_RerEvent_Objective ObjectiveData { get; }
```

#### Property Value

- [CCSUsrMsg_RoundEndReportData_RerEvent_Objective](/docs/api/shared/protobufdefinitions/ccsusrmsg_roundendreportdata_rerevent_objective)

### TAlive

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L22)

```csharp
int TAlive { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TerroristOdds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L16)

```csharp
int TerroristOdds { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Timestamp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L13)

```csharp
float Timestamp { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### VictimData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_RoundEndReportData_RerEvent.cs#L25)

```csharp
CCSUsrMsg_RoundEndReportData_RerEvent_Victim VictimData { get; }
```

#### Property Value

- [CCSUsrMsg_RoundEndReportData_RerEvent_Victim](/docs/api/shared/protobufdefinitions/ccsusrmsg_roundendreportdata_rerevent_victim)

