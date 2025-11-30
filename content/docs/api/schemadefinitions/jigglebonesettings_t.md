---
title: JiggleBoneSettings_t
---

# Interface JiggleBoneSettings_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/JiggleBoneSettings_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface JiggleBoneSettings_t : ISchemaClass<JiggleBoneSettings_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<JiggleBoneSettings_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/JiggleBoneSettings_t.cs#L18)

```csharp
ref int BoneIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BoundsMaxLS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/JiggleBoneSettings_t.cs#L26)

```csharp
ref Vector BoundsMaxLS { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BoundsMinLS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/JiggleBoneSettings_t.cs#L28)

```csharp
ref Vector BoundsMinLS { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Damping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/JiggleBoneSettings_t.cs#L24)

```csharp
ref float Damping { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxTimeStep

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/JiggleBoneSettings_t.cs#L22)

```csharp
ref float MaxTimeStep { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SimSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/JiggleBoneSettings_t.cs#L30)

```csharp
ref JiggleBoneSimSpace SimSpace { get; }
```

#### Property Value

- [JiggleBoneSimSpace](/docs/api/schemadefinitions/jigglebonesimspace)

### SpringStrength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/JiggleBoneSettings_t.cs#L20)

```csharp
ref float SpringStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

