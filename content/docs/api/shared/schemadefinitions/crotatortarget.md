---
title: CRotatorTarget
---

```csharp
public interface CRotatorTarget : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CRotatorTarget>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### OnArrivedAt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRotatorTarget.cs#L16)

```csharp
CEntityIOOutput OnArrivedAt { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### Space

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRotatorTarget.cs#L18)

```csharp
ref RotatorTargetSpace_t Space { get; }
```

#### Property Value

- [RotatorTargetSpace_t](/docs/api/shared/schemadefinitions/rotatortargetspace_t)

