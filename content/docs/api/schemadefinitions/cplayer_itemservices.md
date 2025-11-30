---
title: CPlayer_ItemServices
---

# Interface CPlayer_ItemServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPlayer_ItemServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPlayer_ItemServices : CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_ItemServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayerPawnComponent](/docs/api/schemadefinitions/cplayerpawncomponent)
- [ISchemaClass<CPlayerPawnComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPlayer_ItemServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Methods

### DropActiveItem()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L32)

Drop the item that player is holding.

```csharp
void DropActiveItem()
```

### GiveItem()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L13)

Give an item to the player.

```csharp
T GiveItem<T>() where T : ISchemaClass<T>
```

#### Returns

- T - The item that was given.

#### Type Parameters

- **T**:  - The type of the item to give.

### GiveItem(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L20)

Give an item to the player.

```csharp
T GiveItem<T>(string itemDesignerName) where T : ISchemaClass<T>
```

#### Parameters

- **itemDesignerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The designer name of the item to give.

#### Returns

- T - The item that was given.

#### Type Parameters

- **T**: 

### GiveItem(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L26)

Give an item to the player.

```csharp
void GiveItem(string itemDesignerName)
```

#### Parameters

- **itemDesignerName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The designer name of the item to give.

### RemoveItems()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CPlayer_ItemServices.cs#L37)

Remove all items from the player.

```csharp
void RemoveItems()
```

