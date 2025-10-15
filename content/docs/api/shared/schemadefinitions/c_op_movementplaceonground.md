---
title: C_OP_MovementPlaceOnGround
---

```csharp
public interface C_OP_MovementPlaceOnGround : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_MovementPlaceOnGround>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CollisionGroupName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L27)

```csharp
string CollisionGroupName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### IgnoreCP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L49)

```csharp
ref int IgnoreCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IncludeShotHull

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L39)

```csharp
ref bool IncludeShotHull { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IncludeWater

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L41)

```csharp
ref bool IncludeWater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LerpCP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L35)

```csharp
ref int LerpCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LerpRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L25)

```csharp
ref float LerpRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxTraceLength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L19)

```csharp
ref float MaxTraceLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Offset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L17)

```csharp
CPerParticleFloatInput Offset { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### PreserveOffsetCP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L47)

```csharp
ref int PreserveOffsetCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RefCP1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L31)

```csharp
ref int RefCP1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RefCP2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L33)

```csharp
ref int RefCP2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ScaleOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L45)

```csharp
ref bool ScaleOffset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetNormal

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L43)

```csharp
ref bool SetNormal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Tolerance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L21)

```csharp
ref float Tolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TraceMissBehavior

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L37)

```csharp
ref ParticleTraceMissBehavior_t TraceMissBehavior { get; }
```

#### Property Value

- [ParticleTraceMissBehavior_t](/docs/api/shared/schemadefinitions/particletracemissbehavior_t)

### TraceOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L23)

```csharp
ref float TraceOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TraceSet

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L29)

```csharp
ref ParticleTraceSet_t TraceSet { get; }
```

#### Property Value

- [ParticleTraceSet_t](/docs/api/shared/schemadefinitions/particletraceset_t)

