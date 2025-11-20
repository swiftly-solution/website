---
title: CMultiSource
---

```csharp
public interface CMultiSource : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CMultiSource>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Globalstate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiSource.cs#L26)

```csharp
string Globalstate { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### OnTrigger

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiSource.cs#L22)

```csharp
CEntityIOOutput OnTrigger { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### RgEntities

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiSource.cs#L18)

```csharp
ISchemaFixedArray<CHandle<CBaseEntity>> RgEntities { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

### RgTriggered

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiSource.cs#L20)

```csharp
ISchemaFixedArray<int> RgTriggered { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### Total

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMultiSource.cs#L24)

```csharp
ref int Total { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

