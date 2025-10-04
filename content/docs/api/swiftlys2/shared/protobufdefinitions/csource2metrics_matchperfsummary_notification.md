---
title: CSource2Metrics_MatchPerfSummary_Notification
---

```csharp
public interface CSource2Metrics_MatchPerfSummary_Notification : ITypedProtobuf<CSource2Metrics_MatchPerfSummary_Notification>, INativeHandle
```

#### Implements

## Properties

**Appid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L13)

```csharp
uint Appid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Clients** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<CSource2Metrics_MatchPerfSummary_Notification_Client> Clients { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CSource2Metrics_MatchPerfSummary_Notification_Client](/docs/api/shared/protobufdefinitions/csource2metrics_matchperfsummary_notification_client)>

**GameMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L16)

```csharp
string GameMode { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Map** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L31)

```csharp
string Map { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**ServerBuildId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L19)

```csharp
uint ServerBuildId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**ServerPopid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L22)

```csharp
uint ServerPopid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**ServerProfile** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification.cs#L25)

```csharp
CMsgSource2VProfLiteReport ServerProfile { get; }
```

#### Property Value

- [CMsgSource2VProfLiteReport](/docs/api/shared/protobufdefinitions/cmsgsource2vproflitereport)

