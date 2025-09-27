---
title: CPathSimple
---

```csharp
public interface CPathSimple : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPathSimple>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**CPathQueryComponent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathSimple.cs#L16)

```csharp
CPathQueryComponent CPathQueryComponent { get; }
```

#### Property Value

- [CPathQueryComponent](/docs/api/shared/schemadefinitions/cpathquerycomponent)

**ClosedLoop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathSimple.cs#L20)

```csharp
ref bool ClosedLoop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PathString** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathSimple.cs#L18)

```csharp
ref CUtlString PathString { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

## Methods

**CPathQueryComponentUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathSimple.cs#L22)

```csharp
void CPathQueryComponentUpdated()
```

**PathStringUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathSimple.cs#L23)

```csharp
void PathStringUpdated()
```

