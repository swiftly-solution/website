---
title: CSVCMsg_VoiceData
---

```csharp
public interface CSVCMsg_VoiceData : ITypedProtobuf<CSVCMsg_VoiceData>, INativeHandle, INetMessage<CSVCMsg_VoiceData>, IDisposable
```

#### Implements

## Properties

### AudibleMask

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_VoiceData.cs#L30)

```csharp
int AudibleMask { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Audio

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_VoiceData.cs#L18)

```csharp
CMsgVoiceAudio Audio { get; }
```

#### Property Value

- [CMsgVoiceAudio](/docs/api/shared/protobufdefinitions/cmsgvoiceaudio)

### Client

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_VoiceData.cs#L21)

```csharp
int Client { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Passthrough

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_VoiceData.cs#L36)

```csharp
int Passthrough { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Proximity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_VoiceData.cs#L24)

```csharp
bool Proximity { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tick

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_VoiceData.cs#L33)

```csharp
uint Tick { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Xuid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_VoiceData.cs#L27)

```csharp
ulong Xuid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

