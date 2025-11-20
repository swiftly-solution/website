---
title: CVSound
---

```csharp
public interface CVSound : ISchemaClass<CVSound>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Channels

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L22)

```csharp
ref uint Channels { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L28)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EncodedHeader

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L38)

```csharp
ref CUtlBinaryBlock EncodedHeader { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/shared/natives/cutlbinaryblock)

### Format

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L20)

```csharp
ref CVSoundFormat_t Format { get; }
```

#### Property Value

- [CVSoundFormat_t](/docs/api/shared/schemadefinitions/cvsoundformat_t)

### LoopEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L36)

```csharp
ref int LoopEnd { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LoopStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L24)

```csharp
ref int LoopStart { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Rate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L18)

```csharp
ref int Rate { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SampleCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L26)

```csharp
ref uint SampleCount { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SeekTable

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L34)

```csharp
ref CUtlVector<int> SeekTable { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Sentences

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L30)

```csharp
ref CUtlVector<CAudioSentence> Sentences { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAudioSentence](/docs/api/shared/schemadefinitions/caudiosentence)>

### StreamingSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L32)

```csharp
ref uint StreamingSize { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

