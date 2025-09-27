---
title: CCLCMsg_VoiceData
---

```csharp
public interface CCLCMsg_VoiceData : ITypedProtobuf<CCLCMsg_VoiceData>, INativeHandle, INetMessage<CCLCMsg_VoiceData>, IDisposable
```

#### Implements

## Properties

**Audio** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_VoiceData.cs#L18)

```csharp
CMsgVoiceAudio Audio { get; }
```

#### Property Value

- [CMsgVoiceAudio](/docs/api/shared/protobufdefinitions/cmsgvoiceaudio)

**Tick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_VoiceData.cs#L24)

```csharp
uint Tick { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Xuid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_VoiceData.cs#L21)

```csharp
ulong Xuid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

