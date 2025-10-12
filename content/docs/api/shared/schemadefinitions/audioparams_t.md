---
title: audioparams_t
---

```csharp
public interface audioparams_t : ISchemaClass<audioparams_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### LocalBits

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/audioparams_t.cs#L20)

```csharp
ref byte LocalBits { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### LocalSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/audioparams_t.cs#L16)

```csharp
ISchemaFixedArray<Vector> LocalSound { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[Vector](/docs/api/shared/natives/vector)>

### SoundEventHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/audioparams_t.cs#L24)

```csharp
ref uint SoundEventHash { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SoundscapeEntityListIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/audioparams_t.cs#L22)

```csharp
ref int SoundscapeEntityListIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SoundscapeIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/audioparams_t.cs#L18)

```csharp
ref int SoundscapeIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### LocalBitsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/audioparams_t.cs#L28)

```csharp
void LocalBitsUpdated()
```

### LocalSoundUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/audioparams_t.cs#L26)

```csharp
void LocalSoundUpdated()
```

### SoundEventHashUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/audioparams_t.cs#L30)

```csharp
void SoundEventHashUpdated()
```

### SoundscapeEntityListIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/audioparams_t.cs#L29)

```csharp
void SoundscapeEntityListIndexUpdated()
```

### SoundscapeIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/audioparams_t.cs#L27)

```csharp
void SoundscapeIndexUpdated()
```

