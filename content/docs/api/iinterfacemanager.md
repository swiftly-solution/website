---
title: IInterfaceManager
---

# Interface IInterfaceManager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/IInterfaceManager.cs#L3)

**Namespace**: [SwiftlyS2.Shared](/docs/api)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IInterfaceManager
```

## Methods

### AddSharedInterface(string, TImpl)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/IInterfaceManager.cs#L13)

Add a keyed shared interface for other plugin to use.
The interface must be defined in the contracts dll.

```csharp
void AddSharedInterface<TInterface, TImpl>(string key, TImpl implInstance) where TInterface : class where TImpl : class, TInterface
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The key of the interface.
- **implInstance**: TImpl - The implementation of the interface.

#### Type Parameters

- **TInterface**:  - The interface to add.
- **TImpl**:  - The implementation of the interface.

### GetSharedInterface(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/IInterfaceManager.cs#L30)

Get a shared interface.

```csharp
TInterface GetSharedInterface<TInterface>(string key) where TInterface : class
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The key of the interface.

#### Returns

- TInterface - The implementation of the interface.

#### Type Parameters

- **TInterface**:  - The interface to get.

### HasSharedInterface(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/IInterfaceManager.cs#L22)

Check if a shared interface exists.

```csharp
bool HasSharedInterface(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The key of the interface.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the interface exists, false otherwise.

