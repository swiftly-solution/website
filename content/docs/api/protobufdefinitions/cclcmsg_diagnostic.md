---
title: CCLCMsg_Diagnostic
---

# Interface CCLCMsg_Diagnostic

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_Diagnostic.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCLCMsg_Diagnostic : ITypedProtobuf<CCLCMsg_Diagnostic>, INativeHandle, INetMessage<CCLCMsg_Diagnostic>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCLCMsg_Diagnostic>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCLCMsg_Diagnostic>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### DownstreamFlow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_Diagnostic.cs#L24)

```csharp
CMsgSource2NetworkFlowQuality DownstreamFlow { get; }
```

#### Property Value

- [CMsgSource2NetworkFlowQuality](/docs/api/protobufdefinitions/cmsgsource2networkflowquality)

### PerfSamples

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_Diagnostic.cs#L30)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSource2PerfIntervalSample> PerfSamples { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgSource2PerfIntervalSample](/docs/api/protobufdefinitions/cmsgsource2perfintervalsample)>

### SystemSpecs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_Diagnostic.cs#L18)

```csharp
CMsgSource2SystemSpecs SystemSpecs { get; }
```

#### Property Value

- [CMsgSource2SystemSpecs](/docs/api/protobufdefinitions/cmsgsource2systemspecs)

### UpstreamFlow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_Diagnostic.cs#L27)

```csharp
CMsgSource2NetworkFlowQuality UpstreamFlow { get; }
```

#### Property Value

- [CMsgSource2NetworkFlowQuality](/docs/api/protobufdefinitions/cmsgsource2networkflowquality)

### VprofReport

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_Diagnostic.cs#L21)

```csharp
CMsgSource2VProfLiteReport VprofReport { get; }
```

#### Property Value

- [CMsgSource2VProfLiteReport](/docs/api/protobufdefinitions/cmsgsource2vproflitereport)

