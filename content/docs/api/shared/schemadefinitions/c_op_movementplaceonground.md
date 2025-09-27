---
title: C_OP_MovementPlaceOnGround
---

```csharp
public interface C_OP_MovementPlaceOnGround : CParticleFunctionOperator, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionOperator>, ISchemaClass<C_OP_MovementPlaceOnGround>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**CollisionGroupName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L26)

```csharp
ISchemaFixedString CollisionGroupName { get; }
```

#### Property Value

- [ISchemaFixedString](/docs/api/shared/schemas/ischemafixedstring)

**IgnoreCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L48)

```csharp
ref int IgnoreCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**IncludeShotHull** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L38)

```csharp
ref bool IncludeShotHull { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**IncludeWater** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L40)

```csharp
ref bool IncludeWater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LerpCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L34)

```csharp
ref int LerpCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**LerpRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L24)

```csharp
ref float LerpRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**MaxTraceLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L18)

```csharp
ref float MaxTraceLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Offset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L16)

```csharp
CPerParticleFloatInput Offset { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**PreserveOffsetCP** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L46)

```csharp
ref int PreserveOffsetCP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**RefCP1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L30)

```csharp
ref int RefCP1 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**RefCP2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L32)

```csharp
ref int RefCP2 { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ScaleOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L44)

```csharp
ref bool ScaleOffset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SetNormal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L42)

```csharp
ref bool SetNormal { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Tolerance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L20)

```csharp
ref float Tolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TraceMissBehavior** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L36)

```csharp
ref ParticleTraceMissBehavior_t TraceMissBehavior { get; }
```

#### Property Value

- [ParticleTraceMissBehavior_t](/docs/api/shared/schemadefinitions/particletracemissbehavior_t)

**TraceOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L22)

```csharp
ref float TraceOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**TraceSet** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_MovementPlaceOnGround.cs#L28)

```csharp
ref ParticleTraceSet_t TraceSet { get; }
```

#### Property Value

- [ParticleTraceSet_t](/docs/api/shared/schemadefinitions/particletraceset_t)

