---
title: CGamePlayerZone
---

# Interface CGamePlayerZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGamePlayerZone.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CGamePlayerZone : CRuleBrushEntity, CRuleEntity, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CRuleEntity>, ISchemaClass<CRuleBrushEntity>, ISchemaClass<CGamePlayerZone>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CRuleBrushEntity](/docs/api/schemadefinitions/crulebrushentity)
- [CRuleEntity](/docs/api/schemadefinitions/cruleentity)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CRuleEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CRuleBrushEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CGamePlayerZone>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### OnPlayerInZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGamePlayerZone.cs#L18)

```csharp
CEntityIOOutput OnPlayerInZone { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### OnPlayerOutZone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGamePlayerZone.cs#L20)

```csharp
CEntityIOOutput OnPlayerOutZone { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/schemadefinitions/centityiooutput)

### PlayersInCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGamePlayerZone.cs#L23)

```csharp
SchemaUntypedField PlayersInCount { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### PlayersOutCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGamePlayerZone.cs#L26)

```csharp
SchemaUntypedField PlayersOutCount { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

