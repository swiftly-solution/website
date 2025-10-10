---
title: IInterfaceManager
---

```csharp
public interface IInterfaceManager
```

## Methods

**AddSharedInterface<TInterface, TImpl>(string, TImpl)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/IInterfaceManager.cs#L13)

```csharp
void AddSharedInterface<TInterface, TImpl>(string key, TImpl implInstance) where TInterface : class where TImpl : class, TInterface
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The key of the interface.
- **implInstance**: TImpl - The implementation of the interface.

#### Type Parameters

- **TInterface**:  - The interface to add.
- **TImpl**:  - The implementation of the interface.

**GetSharedInterface<TInterface>(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/IInterfaceManager.cs#L30)

```csharp
TInterface GetSharedInterface<TInterface>(string key) where TInterface : class
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The key of the interface.

#### Returns

- TInterface - The implementation of the interface.

#### Type Parameters

- **TInterface**:  - The interface to get.

**HasSharedInterface(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/IInterfaceManager.cs#L22)

```csharp
bool HasSharedInterface(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The key of the interface.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the interface exists, false otherwise.

