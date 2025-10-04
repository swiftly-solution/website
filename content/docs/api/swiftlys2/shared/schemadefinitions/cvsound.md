---
title: CVSound
---

```csharp
public interface CVSound : ISchemaClass<CVSound>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Channels** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L20)

```csharp
ref uint Channels { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Duration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L26)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**EncodedHeader** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L37)

```csharp
ref CUtlBinaryBlock EncodedHeader { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/shared/natives/cutlbinaryblock)

**Format** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L18)

```csharp
ref CVSoundFormat_t Format { get; }
```

#### Property Value

- [CVSoundFormat_t](/docs/api/shared/schemadefinitions/cvsoundformat_t)

**LoopEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L35)

```csharp
ref int LoopEnd { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**LoopStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L22)

```csharp
ref int LoopStart { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Rate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L16)

```csharp
ref int Rate { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SampleCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L24)

```csharp
ref uint SampleCount { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**SeekTable** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L33)

```csharp
ref CUtlVector<int> SeekTable { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

**Sentences** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L29)

```csharp
ref CUtlVector Sentences { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**StreamingSize** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVSound.cs#L31)

```csharp
ref uint StreamingSize { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

