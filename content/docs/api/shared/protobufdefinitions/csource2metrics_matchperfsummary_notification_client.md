---
title: CSource2Metrics_MatchPerfSummary_Notification_Client
---

```csharp
public interface CSource2Metrics_MatchPerfSummary_Notification_Client : ITypedProtobuf<CSource2Metrics_MatchPerfSummary_Notification_Client>, INativeHandle
```

#### Implements

## Properties

### **BuildId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L19)

```csharp
uint BuildId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **DownstreamFlow** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L22)

```csharp
CMsgSource2NetworkFlowQuality DownstreamFlow { get; }
```

#### Property Value

- [CMsgSource2NetworkFlowQuality](/docs/api/shared/protobufdefinitions/cmsgsource2networkflowquality)

### **PerfSamples** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L31)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSource2PerfIntervalSample> PerfSamples { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSource2PerfIntervalSample](/docs/api/shared/protobufdefinitions/cmsgsource2perfintervalsample)>

### **Profile** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L16)

```csharp
CMsgSource2VProfLiteReport Profile { get; }
```

#### Property Value

- [CMsgSource2VProfLiteReport](/docs/api/shared/protobufdefinitions/cmsgsource2vproflitereport)

### **Steamid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L28)

```csharp
ulong Steamid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **SystemSpecs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L13)

```csharp
CMsgSource2SystemSpecs SystemSpecs { get; }
```

#### Property Value

- [CMsgSource2SystemSpecs](/docs/api/shared/protobufdefinitions/cmsgsource2systemspecs)

### **UpstreamFlow** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSource2Metrics_MatchPerfSummary_Notification_Client.cs#L25)

```csharp
CMsgSource2NetworkFlowQuality UpstreamFlow { get; }
```

#### Property Value

- [CMsgSource2NetworkFlowQuality](/docs/api/shared/protobufdefinitions/cmsgsource2networkflowquality)

