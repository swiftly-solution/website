---
title: CSource2Metrics_MatchPerfSummary_Notification
---

# Interface CSource2Metrics_MatchPerfSummary_Notification

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSource2Metrics_MatchPerfSummary_Notification : ITypedProtobuf<CSource2Metrics_MatchPerfSummary_Notification>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CSource2Metrics_MatchPerfSummary_Notification>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Appid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L13)

```csharp
uint Appid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Clients

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<CSource2Metrics_MatchPerfSummary_Notification_Client> Clients { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CSource2Metrics_MatchPerfSummary_Notification_Client](/docs/api/protobufdefinitions/csource2metrics_matchperfsummary_notification_client)>

### GameMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L16)

```csharp
string GameMode { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Map

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L31)

```csharp
string Map { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ServerBuildId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L19)

```csharp
uint ServerBuildId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ServerPopid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L22)

```csharp
uint ServerPopid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ServerProfile

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L25)

```csharp
CMsgSource2VProfLiteReport ServerProfile { get; }
```

#### Property Value

- [CMsgSource2VProfLiteReport](/docs/api/protobufdefinitions/cmsgsource2vproflitereport)

