---
title: CSource2Metrics_MatchPerfSummary_Notification_Client
---

# Interface CSource2Metrics_MatchPerfSummary_Notification_Client

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSource2Metrics_MatchPerfSummary_Notification_Client : ITypedProtobuf<CSource2Metrics_MatchPerfSummary_Notification_Client>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CSource2Metrics_MatchPerfSummary_Notification_Client>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BuildId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L19)

```csharp
uint BuildId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DownstreamFlow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L22)

```csharp
CMsgSource2NetworkFlowQuality DownstreamFlow { get; }
```

#### Property Value

- [CMsgSource2NetworkFlowQuality](/docs/api/protobufdefinitions/cmsgsource2networkflowquality)

### PerfSamples

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L31)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSource2PerfIntervalSample> PerfSamples { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgSource2PerfIntervalSample](/docs/api/protobufdefinitions/cmsgsource2perfintervalsample)>

### Profile

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L16)

```csharp
CMsgSource2VProfLiteReport Profile { get; }
```

#### Property Value

- [CMsgSource2VProfLiteReport](/docs/api/protobufdefinitions/cmsgsource2vproflitereport)

### Steamid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L28)

```csharp
ulong Steamid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### SystemSpecs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L13)

```csharp
CMsgSource2SystemSpecs SystemSpecs { get; }
```

#### Property Value

- [CMsgSource2SystemSpecs](/docs/api/protobufdefinitions/cmsgsource2systemspecs)

### UpstreamFlow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L25)

```csharp
CMsgSource2NetworkFlowQuality UpstreamFlow { get; }
```

#### Property Value

- [CMsgSource2NetworkFlowQuality](/docs/api/protobufdefinitions/cmsgsource2networkflowquality)

