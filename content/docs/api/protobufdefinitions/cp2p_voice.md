---
title: CP2P_Voice
---

# Interface CP2P_Voice

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CP2P_Voice.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CP2P_Voice : ITypedProtobuf<CP2P_Voice>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CP2P_Voice>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Audio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CP2P_Voice.cs#L13)

```csharp
CMsgVoiceAudio Audio { get; }
```

#### Property Value

- [CMsgVoiceAudio](/docs/api/protobufdefinitions/cmsgvoiceaudio)

### BroadcastGroup

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CP2P_Voice.cs#L16)

```csharp
uint BroadcastGroup { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

