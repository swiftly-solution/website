---
title: CMsgVoiceAudio
---

```csharp
public interface CMsgVoiceAudio : ITypedProtobuf<CMsgVoiceAudio>, INativeHandle
```

- Implements

## Properties

### **Format** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L13)

```csharp
VoiceDataFormat_t Format { get; set; }
```

- Property Value

- [VoiceDataFormat_t](/docs/api/shared/protobufdefinitions/voicedataformat_t)

### **NumPackets** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L31)

```csharp
uint NumPackets { get; set; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **PacketOffsets** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L34)

```csharp
IProtobufRepeatedFieldValueType<uint> PacketOffsets { get; }
```

- Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **SampleRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L25)

```csharp
uint SampleRate { get; set; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **SectionNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L22)

```csharp
uint SectionNumber { get; set; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **SequenceBytes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L19)

```csharp
int SequenceBytes { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **UncompressedSampleOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L28)

```csharp
uint UncompressedSampleOffset { get; set; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **VoiceData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L16)

```csharp
byte[] VoiceData { get; set; }
```

- Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **VoiceLevel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgVoiceAudio.cs#L37)

```csharp
float VoiceLevel { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

