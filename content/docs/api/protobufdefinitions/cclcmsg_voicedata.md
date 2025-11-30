---
title: CCLCMsg_VoiceData
---

# Interface CCLCMsg_VoiceData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_VoiceData.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCLCMsg_VoiceData : ITypedProtobuf<CCLCMsg_VoiceData>, INativeHandle, INetMessage<CCLCMsg_VoiceData>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCLCMsg_VoiceData>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCLCMsg_VoiceData>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Audio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_VoiceData.cs#L18)

```csharp
CMsgVoiceAudio Audio { get; }
```

#### Property Value

- [CMsgVoiceAudio](/docs/api/protobufdefinitions/cmsgvoiceaudio)

### Tick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_VoiceData.cs#L24)

```csharp
uint Tick { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Xuid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_VoiceData.cs#L21)

```csharp
ulong Xuid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

