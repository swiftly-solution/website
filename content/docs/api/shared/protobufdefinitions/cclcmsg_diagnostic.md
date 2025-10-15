---
title: CCLCMsg_Diagnostic
---

```csharp
public interface CCLCMsg_Diagnostic : ITypedProtobuf<CCLCMsg_Diagnostic>, INativeHandle, INetMessage<CCLCMsg_Diagnostic>, IDisposable
```

#### Implements

## Properties

### DownstreamFlow

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_Diagnostic.cs#L24)

```csharp
CMsgSource2NetworkFlowQuality DownstreamFlow { get; }
```

#### Property Value

- [CMsgSource2NetworkFlowQuality](/docs/api/shared/protobufdefinitions/cmsgsource2networkflowquality)

### PerfSamples

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_Diagnostic.cs#L30)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSource2PerfIntervalSample> PerfSamples { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSource2PerfIntervalSample](/docs/api/shared/protobufdefinitions/cmsgsource2perfintervalsample)>

### SystemSpecs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_Diagnostic.cs#L18)

```csharp
CMsgSource2SystemSpecs SystemSpecs { get; }
```

#### Property Value

- [CMsgSource2SystemSpecs](/docs/api/shared/protobufdefinitions/cmsgsource2systemspecs)

### UpstreamFlow

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_Diagnostic.cs#L27)

```csharp
CMsgSource2NetworkFlowQuality UpstreamFlow { get; }
```

#### Property Value

- [CMsgSource2NetworkFlowQuality](/docs/api/shared/protobufdefinitions/cmsgsource2networkflowquality)

### VprofReport

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_Diagnostic.cs#L21)

```csharp
CMsgSource2VProfLiteReport VprofReport { get; }
```

#### Property Value

- [CMsgSource2VProfLiteReport](/docs/api/shared/protobufdefinitions/cmsgsource2vproflitereport)

