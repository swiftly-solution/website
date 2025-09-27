---
title: CGameSceneNodeHandle
---

```csharp
public interface CGameSceneNodeHandle : ISchemaClass<CGameSceneNodeHandle>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNodeHandle.cs#L18)

```csharp
ref CUtlStringToken Name { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

**Owner** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNodeHandle.cs#L16)

```csharp
ref CHandle<CEntityInstance> Owner { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

## Methods

**NameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNodeHandle.cs#L21)

```csharp
void NameUpdated()
```

**OwnerUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNodeHandle.cs#L20)

```csharp
void OwnerUpdated()
```

