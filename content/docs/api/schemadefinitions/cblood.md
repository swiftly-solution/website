---
title: CBlood
---

# Interface CBlood

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlood.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBlood : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CBlood>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPointEntity](/docs/api/schemadefinitions/cpointentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPointEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBlood>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Amount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlood.cs#L22)

```csharp
ref float Amount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Color

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlood.cs#L24)

```csharp
ref BloodType Color { get; }
```

#### Property Value

- [BloodType](/docs/api/schemadefinitions/bloodtype)

### SprayAngles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlood.cs#L18)

```csharp
ref QAngle SprayAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### SprayDir

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlood.cs#L20)

```csharp
ref Vector SprayDir { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

