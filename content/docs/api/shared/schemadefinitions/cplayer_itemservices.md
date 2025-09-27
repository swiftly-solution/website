---
title: CPlayer_ItemServices
---

```csharp
public interface CPlayer_ItemServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_ItemServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Methods

**DropActiveItem()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L18)

```csharp
void DropActiveItem()
```

**GiveItem<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L13)

```csharp
T GiveItem<T>() where T : ISchemaClass<T>
```

#### Returns

- T - The item that was given.

#### Type Parameters

- **T**:  - The type of the item to give.

**RemoveItems()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L23)

```csharp
void RemoveItems()
```

