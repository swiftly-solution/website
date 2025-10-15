---
title: CEntityKeyValues
---

```csharp
public class CEntityKeyValues : IDisposable
```

#### Inheritance

#### Implements

#### Inherited Members

## Constructors

### CEntityKeyValues()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L11)

```csharp
public CEntityKeyValues()
```

## Methods

### Dispose()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L15)

```csharp
public void Dispose()
```

### Get(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L192)

```csharp
public T Get<T>(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- T

#### Type Parameters

- **T**: 

### GetBool(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L81)

```csharp
public bool GetBool(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetColor(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L121)

```csharp
public Color GetColor(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [Color](/docs/api/shared/natives/color)

### GetDouble(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L105)

```csharp
public double GetDouble(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetFloat(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L101)

```csharp
public float GetFloat(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GetInt32(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L85)

```csharp
public int GetInt32(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetInt64(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L93)

```csharp
public long GetInt64(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetPtr(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L113)

```csharp
public nint GetPtr(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### GetQAngle(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L137)

```csharp
public QAngle GetQAngle(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [QAngle](/docs/api/shared/natives/qangle)

### GetString(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L109)

```csharp
public string GetString(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetStringToken(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L117)

```csharp
public CUtlStringToken GetStringToken(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### GetUInt32(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L89)

```csharp
public uint GetUInt32(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetUInt64(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L97)

```csharp
public ulong GetUInt64(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### GetVector(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L125)

```csharp
public Vector GetVector(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [Vector](/docs/api/shared/natives/vector)

### GetVector2D(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L129)

```csharp
public Vector2D GetVector2D(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [Vector2D](/docs/api/shared/natives/vector2d)

### GetVector4D(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L133)

```csharp
public Vector4D GetVector4D(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [Vector4D](/docs/api/shared/natives/vector4d)

### Set(string, T)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L141)

```csharp
public void Set<T>(string key, T value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: T

#### Type Parameters

- **T**: 

### SetBool(string, bool)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L21)

```csharp
public void SetBool(string key, bool value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetColor(string, Color)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L61)

```csharp
public void SetColor(string key, Color value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [Color](/docs/api/shared/natives/color)

### SetDouble(string, double)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L45)

```csharp
public void SetDouble(string key, double value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [double](https://learn.microsoft.com/dotnet/api/system.double)

### SetFloat(string, float)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L41)

```csharp
public void SetFloat(string key, float value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### SetInt32(string, int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L25)

```csharp
public void SetInt32(string key, int value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetInt64(string, long)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L33)

```csharp
public void SetInt64(string key, long value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [long](https://learn.microsoft.com/dotnet/api/system.int64)

### SetPtr(string, nint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L53)

```csharp
public void SetPtr(string key, nint value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

### SetQAngle(string, QAngle)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L77)

```csharp
public void SetQAngle(string key, QAngle value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [QAngle](/docs/api/shared/natives/qangle)

### SetString(string, string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L49)

```csharp
public void SetString(string key, string value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetStringToken(string, CUtlStringToken)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L57)

```csharp
public void SetStringToken(string key, CUtlStringToken value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### SetUInt32(string, uint)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L29)

```csharp
public void SetUInt32(string key, uint value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SetUInt64(string, ulong)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L37)

```csharp
public void SetUInt64(string key, ulong value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### SetVector(string, Vector)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L65)

```csharp
public void SetVector(string key, Vector value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [Vector](/docs/api/shared/natives/vector)

### SetVector2D(string, Vector2D)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L69)

```csharp
public void SetVector2D(string key, Vector2D value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [Vector2D](/docs/api/shared/natives/vector2d)

### SetVector4D(string, Vector4D)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/EntitySystem/CEntityKeyValues.cs#L73)

```csharp
public void SetVector4D(string key, Vector4D value)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [Vector4D](/docs/api/shared/natives/vector4d)

