---
title: SoundEvent
---

```csharp
public class SoundEvent : IDisposable
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### SoundEvent()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L57)

```csharp
public SoundEvent()
```

### SoundEvent(string, float, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L66)

```csharp
public SoundEvent(string name, float volume = 1, float pitch = 1)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **volume**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **pitch**: [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L16)

```csharp
public string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Pitch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L44)

```csharp
public float Pitch { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Recipients

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L55)

```csharp
public ref CRecipientFilter Recipients { get; }
```

#### Property Value

- [CRecipientFilter](/docs/api/shared/natives/crecipientfilter)

### SourceEntityIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L26)

```csharp
public int SourceEntityIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Volume

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L35)

```csharp
public float Volume { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L147)

```csharp
public void Dispose()
```

### Emit()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L141)

```csharp
public void Emit()
```

### GetBool(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L87)

```csharp
public bool GetBool(string fieldName)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetFloat(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L117)

```csharp
public float GetFloat(string fieldName)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GetFloat3(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L133)

```csharp
public Vector GetFloat3(string fieldName)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [Vector](/docs/api/shared/natives/vector)

### GetInt32(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L97)

```csharp
public int GetInt32(string fieldName)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetUInt32(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L107)

```csharp
public uint GetUInt32(string fieldName)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SetBool(string, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L82)

```csharp
public void SetBool(string fieldName, bool value)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetFloat(string, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L112)

```csharp
public void SetFloat(string fieldName, float value)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### SetFloat3(string, float, float, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L122)

```csharp
public void SetFloat3(string fieldName, float x, float y, float z)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **x**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **y**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **z**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### SetFloat3(string, Vector)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L128)

```csharp
public void SetFloat3(string fieldName, Vector vec)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **vec**: [Vector](/docs/api/shared/natives/vector)

### SetInt32(string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L92)

```csharp
public void SetInt32(string fieldName, int value)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetSourceEntity(CEntityInstance)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L77)

```csharp
public void SetSourceEntity(CEntityInstance entity)
```

#### Parameters

- **entity**: [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)

### SetUInt32(string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L102)

```csharp
public void SetUInt32(string fieldName, uint value)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

