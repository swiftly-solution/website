---
title: CMovementComponentUpdater
---

# Interface CMovementComponentUpdater

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMovementComponentUpdater : CAnimComponentUpdater, ISchemaClass<CAnimComponentUpdater>, ISchemaClass<CMovementComponentUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CAnimComponentUpdater](/docs/api/schemadefinitions/canimcomponentupdater)
- [ISchemaClass<CAnimComponentUpdater>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMovementComponentUpdater>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DefaultMotorIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L22)

```csharp
ref int DefaultMotorIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DefaultRunSpeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L24)

```csharp
ref float DefaultRunSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FacingDamping

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L20)

```csharp
CAnimInputDamping FacingDamping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/schemadefinitions/caniminputdamping)

### Motors

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L18)

```csharp
ref CUtlVector<SchemaUntypedField> Motors { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>

### MoveVarsDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L26)

```csharp
ref bool MoveVarsDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NetworkFacing

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L30)

```csharp
ref bool NetworkFacing { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NetworkPath

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L28)

```csharp
ref bool NetworkPath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParamHandles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMovementComponentUpdater.cs#L33)

```csharp
SchemaUntypedField ParamHandles { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

