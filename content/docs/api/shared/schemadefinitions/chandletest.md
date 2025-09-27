---
title: CHandleTest
---

```csharp
public interface CHandleTest : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CHandleTest>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Handle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHandleTest.cs#L16)

```csharp
ref CHandle<CBaseEntity> Handle { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**SendHandle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHandleTest.cs#L18)

```csharp
ref bool SendHandle { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

**HandleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHandleTest.cs#L20)

```csharp
void HandleUpdated()
```

**SendHandleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHandleTest.cs#L21)

```csharp
void SendHandleUpdated()
```

