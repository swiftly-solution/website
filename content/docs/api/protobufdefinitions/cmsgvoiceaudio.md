---
title: CMsgVoiceAudio
---

# Interface CMsgVoiceAudio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgVoiceAudio : ITypedProtobuf<CMsgVoiceAudio>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgVoiceAudio>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Format

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L13)

```csharp
VoiceDataFormat_t Format { get; set; }
```

#### Property Value

- [VoiceDataFormat_t](/docs/api/protobufdefinitions/voicedataformat_t)

### NumPackets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L31)

```csharp
uint NumPackets { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PacketOffsets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L34)

```csharp
IProtobufRepeatedFieldValueType<uint> PacketOffsets { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### SampleRate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L25)

```csharp
uint SampleRate { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SectionNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L22)

```csharp
uint SectionNumber { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SequenceBytes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L19)

```csharp
int SequenceBytes { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UncompressedSampleOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L28)

```csharp
uint UncompressedSampleOffset { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### VoiceData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L16)

```csharp
byte[] VoiceData { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### VoiceLevel

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L37)

```csharp
float VoiceLevel { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

