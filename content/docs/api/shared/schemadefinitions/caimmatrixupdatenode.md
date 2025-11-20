---
title: CAimMatrixUpdateNode
---

```csharp
public interface CAimMatrixUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CAimMatrixUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### LockWhenWaning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAimMatrixUpdateNode.cs#L28)

```csharp
ref bool LockWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OpFixedSettings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAimMatrixUpdateNode.cs#L18)

```csharp
AimMatrixOpFixedSettings_t OpFixedSettings { get; }
```

#### Property Value

- [AimMatrixOpFixedSettings_t](/docs/api/shared/schemadefinitions/aimmatrixopfixedsettings_t)

### ParamIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAimMatrixUpdateNode.cs#L22)

```csharp
CAnimParamHandle ParamIndex { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### ResetChild

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAimMatrixUpdateNode.cs#L26)

```csharp
ref bool ResetChild { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Sequence

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAimMatrixUpdateNode.cs#L24)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/shared/schemadefinitions/hsequence)

### Target

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAimMatrixUpdateNode.cs#L20)

```csharp
ref AnimVectorSource Target { get; }
```

#### Property Value

- [AnimVectorSource](/docs/api/shared/schemadefinitions/animvectorsource)

