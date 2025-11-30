---
title: CParticleVecInput
---

# Interface CParticleVecInput

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CParticleVecInput : CParticleInput, ISchemaClass<CParticleInput>, ISchemaClass<CParticleVecInput>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleInput](/docs/api/schemadefinitions/cparticleinput)
- [ISchemaClass<CParticleInput>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleVecInput>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CPRelativeDir

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L41)

```csharp
ref Vector CPRelativeDir { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### CPRelativePosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L39)

```csharp
ref Vector CPRelativePosition { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### CPValueScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L37)

```csharp
ref Vector CPValueScale { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### ControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L33)

```csharp
ref int ControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DeltaControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L35)

```csharp
ref int DeltaControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FloatComponentX

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L43)

```csharp
CParticleFloatInput FloatComponentX { get; }
```

#### Property Value

- [CParticleFloatInput](/docs/api/schemadefinitions/cparticlefloatinput)

### FloatComponentY

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L45)

```csharp
CParticleFloatInput FloatComponentY { get; }
```

#### Property Value

- [CParticleFloatInput](/docs/api/schemadefinitions/cparticlefloatinput)

### FloatComponentZ

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L47)

```csharp
CParticleFloatInput FloatComponentZ { get; }
```

#### Property Value

- [CParticleFloatInput](/docs/api/schemadefinitions/cparticlefloatinput)

### FloatInterp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L49)

```csharp
CParticleFloatInput FloatInterp { get; }
```

#### Property Value

- [CParticleFloatInput](/docs/api/schemadefinitions/cparticlefloatinput)

### FollowNamedValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L27)

```csharp
ref bool FollowNamedValue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Gradient

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L60)

```csharp
SchemaUntypedField Gradient { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### InterpInput0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L51)

```csharp
ref float InterpInput0 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InterpInput1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L53)

```csharp
ref float InterpInput1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InterpOutput0

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L55)

```csharp
ref Vector InterpOutput0 { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### InterpOutput1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L57)

```csharp
ref Vector InterpOutput1 { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### LiteralColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L22)

```csharp
ref Color LiteralColor { get; }
```

#### Property Value

- [Color](/docs/api/natives/color)

### LiteralValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L20)

```csharp
ref Vector LiteralValue { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### NamedValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L25)

```csharp
SchemaUntypedField NamedValue { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### RandomMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L64)

```csharp
ref Vector RandomMax { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### RandomMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L62)

```csharp
ref Vector RandomMin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L18)

```csharp
ref ParticleVecType_t Type { get; }
```

#### Property Value

- [ParticleVecType_t](/docs/api/schemadefinitions/particlevectype_t)

### VectorAttribute

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L29)

```csharp
ParticleAttributeIndex_t VectorAttribute { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/schemadefinitions/particleattributeindex_t)

### VectorAttributeScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CParticleVecInput.cs#L31)

```csharp
ref Vector VectorAttributeScale { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

