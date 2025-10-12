---
title: CLogicNavigation
---

```csharp
public interface CLogicNavigation : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicNavigation>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### IsOn

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicNavigation.cs#L16)

```csharp
ref bool IsOn { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NavProperty

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicNavigation.cs#L18)

```csharp
ref navproperties_t NavProperty { get; }
```

#### Property Value

- [navproperties_t](/docs/api/shared/schemadefinitions/navproperties_t)

