---
title: SoundEvent
---

# Class SoundEvent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L7)

**Namespace**: [SwiftlyS2.Shared.Sounds](/docs/api/sounds)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public class SoundEvent : IDisposable
```

#### Inheritance

- [object](https://learn.microsoft.com/dotnet/api/system.object)
- [SoundEvent](/docs/api/sounds/soundevent)

#### Implements

- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

- [object.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
- [object.Equals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
- [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)
- [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)
- [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)
- [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)
- [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### SoundEvent()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L57)

```csharp
public SoundEvent()
```

### SoundEvent(string, float, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L66)

```csharp
public SoundEvent(string name, float volume = 1, float pitch = 1)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **volume**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **pitch**: [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L16)

The sound event name.

```csharp
public string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Pitch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L44)

The pitch of the sound event.

```csharp
public float Pitch { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Recipients

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L55)

The recipients of the sound event.

```csharp
public ref CRecipientFilter Recipients { get; }
```

#### Property Value

- [CRecipientFilter](/docs/api/natives/crecipientfilter)

### SourceEntityIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L26)

The index of the entity that this sound event is emitted from.
Setting to -1 (default) will emit the sound from the recipient location.

```csharp
public int SourceEntityIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Volume

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L35)

The volume of the sound event.

```csharp
public float Volume { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### Dispose()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L149)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### Emit()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L143)

Emit the sound event.

<returns>The emitted sound event guid.</returns>

```csharp
public uint Emit()
```

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetBool(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L87)

```csharp
public bool GetBool(string fieldName)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetFloat(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L117)

```csharp
public float GetFloat(string fieldName)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GetFloat3(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L133)

```csharp
public Vector GetFloat3(string fieldName)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [Vector](/docs/api/natives/vector)

### GetInt32(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L97)

```csharp
public int GetInt32(string fieldName)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetUInt32(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L107)

```csharp
public uint GetUInt32(string fieldName)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SetBool(string, bool)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L82)

```csharp
public void SetBool(string fieldName, bool value)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetFloat(string, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L112)

```csharp
public void SetFloat(string fieldName, float value)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### SetFloat3(string, float, float, float)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L122)

```csharp
public void SetFloat3(string fieldName, float x, float y, float z)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **x**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **y**: [float](https://learn.microsoft.com/dotnet/api/system.single)
- **z**: [float](https://learn.microsoft.com/dotnet/api/system.single)

### SetFloat3(string, Vector)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L128)

```csharp
public void SetFloat3(string fieldName, Vector vec)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **vec**: [Vector](/docs/api/natives/vector)

### SetInt32(string, int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L92)

```csharp
public void SetInt32(string fieldName, int value)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetSourceEntity(CEntityInstance)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L77)

```csharp
public void SetSourceEntity(CEntityInstance entity)
```

#### Parameters

- **entity**: [CEntityInstance](/docs/api/schemadefinitions/centityinstance)

### SetUInt32(string, uint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Sounds/SoundEvent.cs#L102)

```csharp
public void SetUInt32(string fieldName, uint value)
```

#### Parameters

- **fieldName**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **value**: [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

